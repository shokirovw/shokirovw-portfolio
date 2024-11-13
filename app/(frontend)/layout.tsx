export const revalidate = 5400;

import './_lib/global_styles.css';
import ApplyOurFont from '@/app/(frontend)/_lib/scripts/FontManager';
import EnableSmoothCursor from './_lib/scripts/SmoothCursorCreator';

import Header from './(pages)/_header/npage';
import Footer from './(pages)/_footer/npage'

export default async function MainLayout({ children }: { children: React.ReactNode }) {

  return (
    <ApplyOurFont>
      <div className={"min-h-[100vh] layout-animate"}>
        <EnableSmoothCursor>
            <Header /> 
              { children }
            <Footer /> 
        </EnableSmoothCursor>
        </div>
    </ApplyOurFont>
  );
}



