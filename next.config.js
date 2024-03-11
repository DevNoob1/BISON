// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         config.resolve.fallback = {
//           fs: false,
//           path: require.resolve('path-browserify')
//         };
//       }
//       return config;
//     }
//   };


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        path: "false",
      };
    }
    return config;
  },
};

module.exports = nextConfig;