import Header from '../components/Header'
import StudentTable from '../components/StudentTable'
import '../index.css'

export default function Homepage() {
  return (
    <div>
        <Header />
        <div className="container">
        <StudentTable />
        </div>
    </div>
  )
}
