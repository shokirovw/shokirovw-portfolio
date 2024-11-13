export const revalidate = 0

import HomepageBlockWithVisuals from "./_lib/components/homepage_block_with_visuals";
import { sql } from '@vercel/postgres'

export default async function HomepageServer () {
  const { rows } = await sql`SELECT like_count FROM likes where id = 1;`;
  
  // Next step is to generalize our design. 
  //    1. By moving some code to the tailwind.config.js
  //    2. By creating ourDesigner class adhering to some well-defined interface
  //    3. By creating new tags, like Y1...
  //    4. By making good use of .css

  return <HomepageBlockWithVisuals likes={rows[0].like_count} />
} 
