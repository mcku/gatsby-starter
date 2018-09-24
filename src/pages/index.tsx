import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
import DanismakIsterMisin from "../components/DanismakIsterMisin/DanismakIsterMisin";
import FooterContact from "../components/FooterContact/FooterContact";
const bookPile = require("../assets/bookPile.jpg");
import Layout from "../components/Layout";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const IndexPage = (props: IndexPageProps) =>
  <Container>
    <Segment vertical >
      <Header as="h2">
        <Icon name="home" />
        <Header.Content>
          Blog - Bilgi Merkezi
            <Header.Subheader>
            Recon Danışmanlık tarafından sağlanan ücretsiz bilgi paylaşım hizmetidir. 
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>

    <Segment vertical >
      <Grid stackable verticalAlign="middle" >
        <Grid.Row>
          <Grid.Column width="8">
          <Segment basic as={Container} text>
            <Header>Neden blog'lamalıyız?</Header>
            <p>
            Bilgi, mutluluk gibi, paylaşıldıkça büyür. Öbür dünyaya servetimizi götüremediğimiz gibi, 
            bilgimizi de götüremeyeceğiz. Bize düşen, bilgimizi paylaşmak, sonraki nesillerin gelişimine 
            katkıda bulunmak olmalıdır. Bizi yetiştiren ailemize, topluma, ülkemize, aynı zamanda 
            insanlığa borcumuzu bu şekilde ödeyebiliriz.</p>

            <p>Ülkemizde sanayi devriminin süreçleri tüm boyutlarıyla yaşanmamış olmasına rağmen, 
              zamanın zorlamasıyla günümüzde
               bilgi toplumuna geçiş başladığından, ortaya çıkan manzara tarım, sanayi ve bilgi 
               toplumunun iç içe geçmiş, birarada olduğu bir durum sergilemektedir. Bu dağılım 
               kurumsal firmalarda da aynı şekilde geçerlidir. Ülkemizde KOBİ ve daha büyük 
               işletmelerde hala tarım toplumu etkisini görmek mümkündür. Tarım toplumu etkisinin 
               ortadan kalkması için birkaç nesil gerekecektir. Biz de içinde bulunduğumuz dönemde 
               üstümüze düşen sorumluluğu yapmalıyız.</p>

            <p>Bu nedenlerle blogdaki yazıların çoğunu Türk diliyle yazmaya karar verdim.</p>

            <p>Bu blogun, bir süredir oluşan birikimleri hızlıca paylaşmayı sağlayacağı için mutluyum.</p>

          </Segment>
          </Grid.Column>
          <Grid.Column width="6" >
            <Image src={bookPile} />
            <Header>Bu nedenlerle blogdaki yazıların çoğunu Türk diliyle yazmaya karar verdim</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Container text>
            <Icon name="hand point right outline" size="huge"/><Button color="orange" as={Link} to="/blog">
            Hemen okumaya başla</Button> 
          </Container>
        </Grid.Row>
       
      </Grid>
    </Segment>

    <Segment vertical>
      <FooterContact />
    </Segment>
    {/* Key features
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
  </Container>;

  export default withLayout(IndexPage);
