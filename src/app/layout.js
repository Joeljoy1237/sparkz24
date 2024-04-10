
// import { Poppins } from "next/font/google";
import '@styles/main.scss'
import styles from '@styles/scss/home.module.scss'
import Navbar from "@widgets/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const inter = Poppins({ subsets: ["latin"] });

export const metadata = {
  title: "SPARKZ'24",
  description: "Official website of SPARKZCCET '23.Sparkz is the State Level Techno Cultural event of Carmel College of Engineering & Technology , Punnapra. Happening on the 19th April and 20th April 2023, this year's SPARKZ is a bold blend of fantasies - Traditional and Modern. Come join us to explore a new world of opportunities!. From a humble beginning four years ago, Sparkz, the annual national-level technical festival of Carmel College of Engineering and Technology Punnapra, has grown into an event that brings out the multitudes of talents and skills hidden in students. It is an attempt to challenge new possibilities, inspire innovation and a platform to showcase and hone our technical talents and skills. As part of Sparkz, several technical and non-technical events are conducted for participants over the two days. A greater focus is placed on the technical events conducted by all four branches. This year events for the school students are also organized to support and encourage budding talents. Participants from various colleges and schools are invited to participate and win the attractive prizes"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Navbar />
        <div className={styles.container}>
          {children}
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
