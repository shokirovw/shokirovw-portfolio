export const revalidate = 0; 

import './_lib/global_styles.css';
import ApplyOurFont from '@/app/(frontend)/_lib/scripts/FontManager';
import Footer from './(pages)/_footer/npage';
import Header from './(pages)/_header/npage';
import AnimatedBackground from './_lib/components/NiceAnimatedBackground';
import EnableSmoothCursor from './_lib/scripts/SmoothCursorCreator';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApplyOurFont>
      <AnimatedBackground>
        <EnableSmoothCursor>
          <LayoutContent>

              { children }
          </LayoutContent>
        </EnableSmoothCursor>
      </AnimatedBackground>
    </ApplyOurFont>
  );
}

// Incomplete files are: NavigationbarCreator

function LayoutContent ({ children }) {
  return (
    <>
      <Header /> 
        {children}
      <Footer />
    </>
  );
}



