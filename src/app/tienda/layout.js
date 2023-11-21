
import Navbar2 from '../Navbar2'

function layout({children}) {
  return (
    <section class="menuLateral">
        
        <Navbar2/>
        <div class="hijosMenu">
        {children}
        </div>
    </section>
  )
}

export default layout