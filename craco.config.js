module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                "https": false,  // Already added
                "http": false,   // Add this line
                "url": false,
                "zlib": false,
            };
            return webpackConfig;
        },
    },
};
