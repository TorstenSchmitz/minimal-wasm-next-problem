/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	experimental: {
		turbo: {
			// turbopack
		},
	},
	webpack: (config, { isServer, webpack }) => {
		config.experiments = {
			asyncWebAssembly: true,
			layers: true,
		};
		config.resolve.fallback = { fs: false };
		return config;
	},
};

export default nextConfig;
