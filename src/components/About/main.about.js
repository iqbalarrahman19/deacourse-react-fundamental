import React from "react"
import { Card } from "react-bootstrap"

const About = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h1 className="judul">About Me</h1>
                <p className="body-content">Selamat datang di website sederhana saya. 
                Saya baru pertama kali membuat website menggunakan react js, 
                dan terima kasih kepada mentor bang dea afrizal yang sudah 
                mengajarkan ilmu library react js kepada saya walau masih basic. 
                Semoga ilmu yang saya dapatkan dari bang dea bisa masuk ke tempat kerja dunia TI.   </p>
                <div className="footer-content">
                <Card border="primary" style={{ width: '50rem' }}>
                    <Card.Header>INFORMASI</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    ini adalah website yang dibuat berdasarkan task yang diberikan bang dea saat mengikuti Dea Course React JS Fundamental.
                    </Card.Text>
                    <Card.Text>
                    Beberapa task tersebut adalah:
                    <ol numbered className="my-4">
                        <li>Routing URL post dengan isian api POST</li>
                        <li>Modifikasi UI Homepage</li>
                        <li>Membuat Active Navigation Bar</li>
                        <li>Membuat modal popup dari API POST</li>
                        <li>Membuat UI Kreatifitas Masing-Masing</li>
                    </ol>
                    Dibuat Oleh <b>Iqbal Arrahman</b>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </React.Fragment>
    )
}
export default About