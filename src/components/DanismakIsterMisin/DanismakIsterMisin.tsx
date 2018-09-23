import * as React from "react";
import { Header, Segment, Icon, Sticky, Reveal, Popup, Button, Container, Divider,
     Message } from "semantic-ui-react";

     import Link from "gatsby-link";

export default () => {
    const content = <Segment>
                    <p>Türk iş dünyasına yönelik sorumluluğumuzun bir parçası olarak ihtiyaçlarınızı 
                        konuşup, çözümler için yol haritası oluşturalım. 
                    </p>
                    <p>İster telefonla, ister yüz yüze firmanızın ihtiyaçlarını konuşup projelendirmeye çalışalım. </p>
                    <ul>
                        <li>Halihazırda ya da çalışma sonrasında müşterimiz olmanız gerekmez</li> 
                        <li>İhtiyacınızı doğru tespit edin</li> 
                        <li>Gereksiz maliyetlerden kaçının</li> 
                        <li>Sektör deneyimlerinden faydalanın</li> 
                        <li>Herhangi bir ödeme talep etmeksizin</li> 
                    </ul>

                    <p>Biz ne elde ediyoruz? Pazarı ve ihtiyaçları tanıyoruz. Kim bilir, belki işe yarar bir 
                        yenilik böylece ortaya çıkar. 
                     </p> 

                </Segment>;

    return (
            <Segment vertical>
                Aradığınızı bulamıyorsanız, Recon'dan ücretsiz danışmanlık alın. 
                Detaylar <Icon name="hand outline right" size="large"/>
            <Button color="orange"
                as={Link} to="/danis"> 
                Ücretsiz danışın
            </Button>

            </Segment>
    );
  };
