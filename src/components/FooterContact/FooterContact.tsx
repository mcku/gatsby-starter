import * as React from "react";
import { Header, Segment, Icon, Image } from "semantic-ui-react";
const reconLogo = require("../../assets/reconLogoTr2018.png");

export default () => {
  return (
      <div>
        <Segment vertical basic >
            <p><em>Yazılanlar yazarların görüşleri olup uygulamak zorunda değilsiniz. Oluşabilecek zarar 
                ve kayıplardan herhangi bir sorumluluk 
                kabul edilmez.</em></p>
            <Header> <Header.Content>
            Bize ulaşın 
            </Header.Content></Header>
            
            <p>
            Recon Teknoloji Danışmanlık ve Ticaret Ltd. Şti. &nbsp;
            <Icon name="building outline" />
             Kozyatağı Mahallesi Sarıkanarya Sokak No:14 Byoffice Plaza No:14/7, Kadıköy İstanbul 
            &nbsp; <Icon name="phone" />(216) 906 00 32 &nbsp;
            <Icon name="envelope" />info@recon.com.tr        
            </p>
        </Segment>
    </div>
  );
};
