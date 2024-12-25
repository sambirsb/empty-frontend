import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import '@app/styles/main.css'

export const metadata: Metadata = {
  title: "Hello worlds",
};

const layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout
