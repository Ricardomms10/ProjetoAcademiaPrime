import NavBar from '@/components/NavBar'
import styles from './page.module.css'
import Painel from '@/components/Painel'
import Unidades from '@/components/Unidades'
import Planos from '@/components/Planos'
import Cartoes from '@/components/Cartoes'
import Aulas from '@/components/Aulas'
import Aplicativo from '@/components/Aplicativo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Painel />
        <div className={styles.grid}>
          <Unidades />
          <Planos />
          <Cartoes />
          <Aulas />
          <Aplicativo />
          <Footer />
        </div>
    </div>
  )
}
