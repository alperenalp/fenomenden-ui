import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <h4 className="underline c-pointer">Kurumsal</h4>
          <ul className="list-style-none mt-5 c-pointer">
            <li>Hakkımızda</li>
            <li>Sürdürülebilirlik</li>
            <li>İnsan Kaynakları</li>
            <li>Haberler</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div>
          <h4 className="underline c-pointer">Hizmetlerimiz</h4>
          <ul className="list-style-none mt-5 c-pointer">
            <li>Reklam</li>
            <li>Toplu Ürün Girişi</li>
            <li>Doping</li>
            <li>Mobil</li>
            <li>Güvenli e-Ticaret (GeT)</li>
          </ul>
        </div>
        <div>
          <h4 className="underline c-pointer">Mağazalar</h4>
          <ul className="list-style-none mt-5 c-pointer">
            <li>Neden Mağaza?</li>
            <li>Mağaza Açmak İstiyorum</li>
          </ul>
        </div>
        <div>
          <h4 className="underline c-pointer">Gizlilik</h4>
          <ul className="list-style-none mt-5 c-pointer">
            <li>Güvenli Alışverişin İpuçları</li>
            <li>Sözleşmeler ve Kurallar</li>
            <li>Hesap Sözleşmesi</li>
            <li>Kullanım Koşulları</li>
            <li>Site Haritası</li>
            <li>Kişisel Verilerin Korunması</li>
            <li>Yardım ve İşlem Rehberi</li>
          </ul>
        </div>
        <div>
          <h4 className="underline c-pointer">Bizi Takip Edin</h4>
          <ul className="list-style-none mt-5 c-pointer">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
