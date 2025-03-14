import type { PropsWithChildren } from "react";

import "~/app/globals.css";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
