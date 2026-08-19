import React from 'react';

/**
 * High-Precision, Authentic Brand Vector SVGs for All Technologies
 */
export const TechLogo = ({ iconKey, size = 44, className = '' }) => {
  switch (iconKey?.toLowerCase()) {
    case 'react':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 115 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="React Logo"
        >
          <title>React</title>
          <ellipse cx="57.5" cy="51" rx="55" ry="21" stroke="#00D8FF" strokeWidth="6.5" />
          <ellipse cx="57.5" cy="51" rx="55" ry="21" transform="rotate(60 57.5 51)" stroke="#00D8FF" strokeWidth="6.5" />
          <ellipse cx="57.5" cy="51" rx="55" ry="21" transform="rotate(120 57.5 51)" stroke="#00D8FF" strokeWidth="6.5" />
          <circle cx="57.5" cy="51" r="10" fill="#00D8FF" />
        </svg>
      );

    case 'nextjs':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Next.js Logo"
        >
          <title>Next.js</title>
          <circle cx="64" cy="64" r="64" fill="#000000" />
          <path
            d="M106.3 111.9L49.1 38.4H38.4V89.6H47.1V49.3L99.5 117.2c2.4-1.6 4.7-3.4 6.8-5.3z"
            fill="url(#nextjs_slash)"
          />
          <rect x="81.6" y="38.4" width="8.6" height="51.2" fill="url(#nextjs_bar)" />
          <defs>
            <linearGradient id="nextjs_slash" x1="77.5" y1="82.8" x2="102.8" y2="114.1" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nextjs_bar" x1="85.9" y1="38.4" x2="85.9" y2="75.9" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="JavaScript Logo"
        >
          <title>JavaScript</title>
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path
            d="M76.4 94.1c4.3 7.2 9.9 12.6 20.2 12.6 8.6 0 14.1-4.3 14.1-10.3 0-7.1-5.6-9.5-15.2-13.7-13.7-5.9-22.7-13.3-22.7-29 0-14.4 11.1-25.3 28.5-25.3 12.5 0 21.4 5.3 27.4 15.7l-12.2 7.8c-2.8-5-6.6-7.8-15.2-7.8-6.4 0-11.3 4-11.3 9.2 0 6.4 4.4 8.9 13.7 13 15.8 6.7 24.3 13.7 24.3 30 0 17-13.3 26.5-31.4 26.5-18 0-29.2-8.9-35.1-20.4l14.9-8.3zm-46.4 1.5c3.1 5.3 6 9.8 12.6 9.8 6.4 0 10.4-2.6 10.4-12.5V29.7h17.3v63.2c0 19.1-11.1 28-27.7 28-15.1 0-23.7-7.8-28.5-18.1l15.9-7.2z"
            fill="#000000"
          />
        </svg>
      );

    case 'java':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Java Logo"
        >
          <title>Java</title>
          {/* Upper Steam (Orange/Red) */}
          <path
            d="M48.2 27.3c0 0-8.9 9-0.8 19.5 7.6 9.8 11.6 14.8-18.5 35.8 0 0 24.2-12.3 14.1-25.2-9-11.4-6.3-17.5 5.2-30.1z"
            fill="#EA2D2E"
          />
          <path
            d="M66.8 12c0 0-14.8 14.8 1.3 32.5 12.8 14.1 8.3 22.3-15.7 41.2 0 0 31.9-17.6 20.3-39.7C63.2 28.5 61.2 20.6 66.8 12z"
            fill="#E76F00"
          />
          <path
            d="M87.3 38.6c0 0-10.7 7.7-19.4 11.2-10 4-13.8 10-1 16.5 14.6 7.4 10.4 16.3-8.8 28.6 0 0 22.3-9.5 16.8-24.8-5.3-14.9 14.6-21.7 12.4-31.5z"
            fill="#EA2D2E"
          />
          {/* Coffee Cup / Saucer Curves (Blue) */}
          <path
            d="M47.6 98.1s-4.8 2.8 3.4 3.7c9.9 1.1 14.9 1 25.8-1.1 0 0 2.9 1.8 6.9 3.4-24.5 10.4-55.3-.6-36.1-6zm-3-13.7s-5.3 4 2.8 4.8c10.6 1.1 18.9 1.2 33.4-1.6 0 0 2 2 5.1 3.1-29.5 8.7-62.4.7-41.3-6.3z"
            fill="#0074BD"
          />
          <path
            d="M102.1 108.2s3.5 2.9-3.9 5.2c-14.1 4.3-58.7 5.6-71.1.2-4.5-1.9 3.9-4.6 6.5-5.2 2.7-.6 4.3-.5 4.3-.5-5-3.5-32 6.9-13.7 9.8 49.8 8.1 90.8-3.6 77.9-9.5zM49.9 70.3s-22.7 5.4-8 7.3c6.2.8 16.3.7 26.2-.2 8.1-.7 16.2-2.1 16.2-2.1s-2.9 1.7-6.2 3.1c-24.1 10-70.5 5.3-28.2-8.1z"
            fill="#0074BD"
          />
        </svg>
      );

    case 'springboot':
    case 'spring':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Spring Boot Logo"
        >
          <title>Spring Boot</title>
          {/* Spring Boot Green Rounded Hexagon / Diamond */}
          <path
            d="M119.8 54.2L73.8 8.2c-5.4-5.4-14.2-5.4-19.6 0L8.2 54.2c-5.4 5.4-5.4 14.2 0 19.6l46 46c5.4 5.4 14.2 5.4 19.6 0l46-46c5.4-5.4 5.4-14.2 0-19.6z"
            fill="#6DB33F"
          />
          {/* Official Spring White Leaf */}
          <path
            d="M89.4 82.5c-4.9 4.9-13.3 3.1-20.7-4.3L33.2 42.7c-3.3-3.3-5-7.4-5-11.7 0-1.9.3-3.9 1.1-5.7 1.6-3.9 4.8-7.1 8.7-8.7 1.7-.8 3.7-1.1 5.7-1.1 4.3 0 8.4 1.7 11.7 5l34.5 34.5c8.6 8.6 9 19.1-.5 27.5z"
            fill="#FFFFFF"
          />
          {/* Inner Spring Leaf Circuit */}
          <path
            d="M64 43.8c-2.6 0-5.1 1-6.9 2.8L37.4 66.3c-3.8 3.8-3.8 10 0 13.8 3.8 3.8 10 3.8 13.8 0l19.7-19.7c1.8-1.8 2.8-4.3 2.8-6.9 0-2.6-1-5.1-2.8-6.9-1.8-1.8-4.3-2.8-6.9-2.8z"
            fill="#6DB33F"
          />
        </svg>
      );

    case 'csharp':
    case 'c#':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="C# Logo"
        >
          <title>C#</title>
          {/* Outer Hexagon Shield */}
          <path
            d="M117.8 33.1L68.5 4.6c-2.8-1.6-6.2-1.6-9 0L10.2 33.1c-2.8 1.6-4.5 4.6-4.5 7.8v56.2c0 3.2 1.7 6.2 4.5 7.8l49.3 28.5c2.8 1.6 6.2 1.6 9 0l49.3-28.5c2.8-1.6 4.5-4.6 4.5-7.8V40.9c0-3.2-1.7-6.2-4.5-7.8z"
            fill="#68217A"
          />
          <path
            d="M111.8 36.6L67.1 10.8c-1.9-1.1-4.3-1.1-6.2 0L16.2 36.6c-1.9 1.1-3.1 3.2-3.1 5.4v51.6c0 2.2 1.2 4.3 3.1 5.4l44.7 25.8c1.9 1.1 4.3 1.1 6.2 0l44.7-25.8c1.9-1.1 3.1-3.2 3.1-5.4V42c0-2.2-1.2-4.3-3.1-5.4z"
            fill="#512BD4"
          />
          {/* Bold 'C' */}
          <path
            d="M62.5 45.3c-2.1-2.8-4.9-4.9-8.4-6.4-3.5-1.5-7.3-2.2-11.5-2.2-6.1 0-11.4 1.6-15.9 4.7-4.5 3.1-8 7.5-10.5 13.2-2.5 5.6-3.7 12.1-3.7 19.5s1.2 13.9 3.7 19.5c2.5 5.6 6 10 10.5 13.2 4.5 3.1 9.8 4.7 15.9 4.7 4.2 0 8-.7 11.5-2.2 3.5-1.5 6.3-3.6 8.4-6.4l-9.8-9.1c-2.6 3.5-5.8 5.3-9.7 5.3-3.5 0-6.5-1-9-3-2.5-2-4.3-4.9-5.4-8.8-1.1-3.8-1.7-8.1-1.7-12.7s.6-8.9 1.7-12.7c1.1-3.8 2.9-6.8 5.4-8.8 2.5-2 5.5-3 9-3 3.9 0 7.1 1.8 9.7 5.3l9.8-9.1z"
            fill="#FFFFFF"
          />
          {/* Green '#' Hash */}
          <path
            d="M87.9 44.5h5.4v13.5h13.5v5.4H93.3v13.5h13.5v5.4H93.3v13.5h-5.4V82.3H74.4v13.5H69V82.3H55.5v-5.4H69V63.4H55.5V58H69V44.5h5.4V58h13.5V44.5zm0 18.9H74.4v13.5h13.5V63.4z"
            fill="#239120"
          />
        </svg>
      );

    case 'sql':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="SQL Logo"
        >
          <title>SQL</title>
          {/* Cylinder Top */}
          <ellipse cx="64" cy="28" rx="46" ry="16" fill="#0284C7" />
          <ellipse cx="64" cy="28" rx="38" ry="11" fill="#38BDF8" />

          {/* Cylinder Body Layer 1 */}
          <path d="M18 28v24c0 8.8 20.6 16 46 16s46-7.2 46-16V28" fill="#0369A1" />
          <ellipse cx="64" cy="52" rx="46" ry="15" fill="#0284C7" />
          <ellipse cx="64" cy="52" rx="38" ry="10" fill="#38BDF8" opacity="0.6" />

          {/* Cylinder Body Layer 2 */}
          <path d="M18 52v24c0 8.8 20.6 16 46 16s46-7.2 46-16V52" fill="#075985" />
          <ellipse cx="64" cy="76" rx="46" ry="15" fill="#0284C7" />

          {/* Bottom Layer */}
          <path d="M18 76v24c0 8.8 20.6 16 46 16s46-7.2 46-16V76" fill="#0C4A6E" />
          <ellipse cx="64" cy="100" rx="46" ry="15" fill="#0284C7" />

          {/* SQL Badge Banner */}
          <rect x="24" y="44" width="80" height="34" rx="8" fill="#0B132B" stroke="#38BDF8" strokeWidth="2.5" />
          <text
            x="64"
            y="68"
            textAnchor="middle"
            fill="#38BDF8"
            fontSize="20"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            letterSpacing="3"
          >
            SQL
          </text>
        </svg>
      );

    case 'mysql':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="MySQL Logo"
        >
          <title>MySQL</title>
          {/* Leaping Dolphin in Standard Official Colors */}
          <path
            d="M117.7 98.2c-7-.2-12.3.5-16.9 2.4-1.3.5-3.4.6-3.6 2.2.7.7.8 1.9 1.4 2.8 1.1 1.8 2.9 4.1 4.6 5.4 1.8 1.3 3.6 2.8 5.6 4 3.4 2.1 7.2 3.3 10.5 5.4 1.9 1.2 3.9 2.8 5.8 4.2.9.7 1.6 1.8 2.8 2.2v-.2c-.6-.8-.8-1.9-1.4-2.8l-2.6-2.6c-2.5-3.3-5.7-6.3-9.1-8.7-2.7-1.9-8.8-4.6-9.9-7.7l-.2-.2c1.9-.2 4.2-.9 5.9-1.4 3-.8 5.6-.6 8.7-1.4l4.2-1.2v-.8c-1.6-1.6-2.7-3.7-4.4-5.2-4.4-3.8-9.3-7.6-14.3-10.7-2.8-1.7-6.2-2.9-9.1-4.4-1-.5-2.7-.8-3.4-1.6-1.5-2-2.4-4.4-3.6-6.7-2.5-4.8-4.9-10-7.1-15.1-1.5-3.4-2.5-6.8-4.4-9.9-9-14.8-18.7-23.7-33.7-32.5-3.2-1.9-7-2.6-11.1-3.6L20.4 4c-1.3-.6-2.7-2.2-4-3C17 3.5 4.2-3.3.5 5.7c-2.3 5.6 3.5 11.2 5.6 14 1.5 2 3.3 4.3 4.4 6.5.7 1.5.8 3 1.4 4.6 1.4 3.9 2.7 8.1 4.6 11.7.9 1.8 2 3.7 3.2 5.4.7 1 2 1.4 2.2 3-1.2 1.7-1.3 4.4-2 6.5-3.1 9.8-1.9 21.9 2.6 29.1 1.4 2.2 4.6 7 9.1 5.2 3.9-1.6 3-6.5 4.2-10.9.3-1 .1-1.7.6-2.4.7-.9 2.1-1 3.2-.8 3.5.7 6.4 2.5 8.9 4.9 3.8 3.6 6.3 8.3 8.3 13 1.6 3.6 2.6 7.4 4.5 10.9 2.2 4.2 5.5 7.7 9.3 10.6 5.8 4.4 12.8 6.9 19.9 8.3 7 .7 13.9-.3 20.3-3.2 5.6-2.5 10.4-6.4 14.5-11.1.9-1.1 1.9-2.3 2.7-3.5 1.1-1.5 1.3-3.6 1.2-5.4-.1-1.9-.9-3.7-2.2-5z"
            fill="#00618A"
          />
          {/* Orange Dolphin Belly & Fin Highlights */}
          <path
            d="M58.3 64.7c-3.1 3.5-7.5 5.8-12.2 6.3-4.8.5-9.6-.7-13.6-3.4-4-2.7-6.9-6.8-8.1-11.5-1.2-4.7-.5-9.7 1.9-13.9 2.4-4.2 6.3-7.4 10.9-8.9 4.6-1.5 9.7-1.1 14 1.1 4.3 2.2 7.6 6 9.1 10.6 1.5 4.6 1.1 9.7-1.1 14-.3.6-.6 1.2-.9 1.7-.6 1.4-1.3 2.7-2.3 3.8z"
            fill="#E48E00"
          />
          <path
            d="M32 98c16 9 36 9 52 0 4 6.8 12 11.3 20 13.5-10 4.5-22 6.8-34 6.8s-24-2.3-34-6.8c-6-4.5-10-9-12-13.5h8z"
            fill="#00618A"
          />
        </svg>
      );

    case 'androidstudio':
    case 'android':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Android Studio Logo"
        >
          <title>Android Studio</title>
          {/* Android Robot Head - Google Android Green */}
          <g transform="translate(14, 18)">
            {/* Antennas */}
            <line x1="28" y1="24" x2="16" y2="4" stroke="#3DDC84" strokeWidth="6" strokeLinecap="round" />
            <line x1="72" y1="24" x2="84" y2="4" stroke="#3DDC84" strokeWidth="6" strokeLinecap="round" />

            {/* Dome Head */}
            <path
              d="M6 48C6 24 25.7 4.5 50 4.5S94 24 94 48v6H6v-6z"
              fill="#3DDC84"
            />

            {/* Eyes */}
            <circle cx="30" cy="30" r="5.5" fill="#FFFFFF" />
            <circle cx="70" cy="30" r="5.5" fill="#FFFFFF" />

            {/* Lower Body Preview */}
            <rect x="6" y="58" width="88" height="34" rx="8" fill="#3DDC84" />
          </g>

          {/* Builder Compass & Ruler Overlay Badge */}
          <circle cx="94" cy="94" r="24" fill="#073042" stroke="#3DDC84" strokeWidth="3" />
          <path d="M94 76l6 14h-12l6-14z" fill="#3DDC84" />
          <path d="M94 112l-6-14h12l-6 14z" fill="#4285F4" />
          <circle cx="94" cy="94" r="4.5" fill="#FFFFFF" />
        </svg>
      );

    case 'git':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Git Logo"
        >
          <title>Git</title>
          <path
            d="M124.9 57.3L70.7 3.1c-4.1-4.1-10.8-4.1-14.9 0L38.4 20.5l19 19c4.3-1.4 9.3-.5 12.8 3 3.5 3.5 4.5 8.5 3.1 12.8l18.3 18.3c4.3-1.4 9.3-.5 12.8 3 5 5 5 13.1 0 18.1s-13.1 5-18.1 0c-3.8-3.8-4.7-9.4-2.7-14.1L66.7 63.8v31.4c1.7 1 3.2 2.4 4.3 4.1 3.7 5.7 2.1 13.3-3.6 17-5.7 3.7-13.3 2.1-17-3.6-3.7-5.7-2.1-13.3 3.6-17 1.7-1.1 3.7-1.7 5.7-1.8V62.4c-2-.2-4-.8-5.7-1.9L35.4 79c.1.6.1 1.2.1 1.9 0 7.1-5.8 12.8-12.8 12.8S10 87.9 10 80.9s5.8-12.8 12.8-12.8c2.4 0 4.6.6 6.5 1.8l18.5-18.5c-1.1-1.9-1.8-4.1-1.8-6.5 0-4.7 2.5-8.8 6.3-11.1L34.1 16.3 3.1 47.3c-4.1 4.1-4.1 10.8 0 14.9l54.2 54.2c4.1 4.1 10.8 4.1 14.9 0l52.7-52.7c4.1-4.1 4.1-10.8 0-14.9v-7.5z"
            fill="#F05032"
          />
        </svg>
      );

    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 98 96"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="GitHub Logo"
        >
          <title>GitHub</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="currentColor"
          />
        </svg>
      );

    case 'vscode':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="VS Code Logo"
        >
          <title>Visual Studio Code</title>
          {/* Microsoft VS Code Official 3-Part Ribbon */}
          {/* Back Right Fold */}
          <path
            d="M93.3 125.8c3.2 1.6 7.1 1.2 9.9-.9l20.4-17c2.8-2.3 4.4-5.8 4.4-9.4V29.5c0-3.6-1.6-7.1-4.4-9.4l-20.4-17c-2.8-2.1-6.7-2.5-9.9-.9-3.2 1.6-5.2 4.8-5.2 8.4v106.8c0 3.6 2 6.8 5.2 8.4z"
            fill="#007ACC"
          />
          {/* Center Crossed Loop */}
          <path
            d="M93.3 125.8c-1.3-.7-2.5-1.6-3.4-2.8L40.7 77.2l-23 17.6c-2.7 2.1-6.4 2.3-9.4.6-3-1.7-4.7-4.9-4.3-8.4.1-1 .4-2 .9-2.9l19.5-20.1L4.9 43.9c-2.1-2.2-2.8-5.4-1.7-8.3 1.1-2.9 3.8-4.8 6.9-4.8.8 0 1.6.2 2.4.6l28.2 18.8 49.2-45.8c1.3-1.2 2.8-2.1 4.5-2.6L93.3 125.8z"
            fill="#0066B8"
          />
          {/* Front Left Ribbon */}
          <path
            d="M17.7 94.8l72.2 28.2c1.1.4 2.3.6 3.4.6V4.4c-1.1 0-2.3.2-3.4.6L17.7 33.2c-2.8 1.1-4.8 3.6-5.3 6.6-.5 3 .6 6 2.8 8l25.5 24.2L15.2 96.2c-2.2 2-3.3 5-2.8 8 .5 3 2.5 5.5 5.3 6.6z"
            fill="#1F9CF0"
          />
        </svg>
      );

    default:
      return null;
  }
};
