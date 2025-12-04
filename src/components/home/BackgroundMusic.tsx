'use client';

import { useEffect, useRef, useState } from 'react';

interface BackgroundMusicProps {
  audioSrc: string;
}

export default function BackgroundMusic({ audioSrc }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // 30% volume by default
  const [showPlayPrompt, setShowPlayPrompt] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = volume;

    audioRef.current = audio;

    // Auto-play when component mounts
    const tryAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setShowPlayPrompt(false);
      } catch (error) {
        // Autoplay was blocked by browser
        console.log('Autoplay blocked, showing play prompt');
        setShowPlayPrompt(true);
        setIsPlaying(false);
      }
    };

    // Small delay to ensure page is loaded
    const timer = setTimeout(() => {
      tryAutoPlay();
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.src = '';
    };
  }, [audioSrc, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowPlayPrompt(false);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const handlePlayPromptClick = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setShowPlayPrompt(false);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  // Show prompt if autoplay was blocked
  if (showPlayPrompt) {
    return (
      <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-purple-600 backdrop-blur-md rounded-2xl shadow-2xl p-5 max-w-sm animate-bounce">
        <div className="flex items-center gap-4">
          <div className="text-4xl animate-pulse">🎵</div>
          <div className="flex-1">
            <p className="font-bold text-white mb-1 text-lg">Relaxing Music Ready!</p>
            <p className="text-white/90 text-sm">
              Click to start your ambient experience
            </p>
          </div>
          <button
            onClick={handlePlayPromptClick}
            className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg font-bold text-xl"
            aria-label="Play music"
          >
            ▶
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-md rounded-full shadow-2xl p-4 flex items-center gap-3 transition-all duration-300 hover:bg-white">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause relaxation music' : 'Play relaxation music'}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        )}
      </button>

      {/* Volume Control - Shows when playing */}
      {isPlaying && (
        <div className="flex items-center gap-2 animate-fadeIn">
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-gray-300 rounded-full appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${volume * 100}%, #E5E7EB ${volume * 100}%, #E5E7EB 100%)`
            }}
            aria-label="Volume control"
          />

          {/* Music Note Animation */}
          <div className="text-primary animate-pulse">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

