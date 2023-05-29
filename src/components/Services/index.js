import { Row, Col, Container } from "reactstrap";
import BlockContent from "../common/BlockContent";
import BlockHeader from "../common/BlockHeader";
import Service from "./Service";
import styled from "styled-components";
import screens from "../Layout/mediaQueries";

const ServiceItem = styled.li`
  list-style-type: none;
  font-weight: 300;
  font-size: 15px;
  @media only screen and (${screens.md}) {
    font-size: 18px;
  }
`;

const Services = () => {
  return (
    <Container id="services">
      <BlockContent>
        <Row>
          <Col lg={1} />
          <Col lg={10}>
            <BlockHeader>
              În timp ce tu te bucuri de încă un lucru tăiat din agenda ta,
              echipa noastră se ocupă de bunăstarea locuinței sau a afacerii
              tale.
            </BlockHeader>
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col>
            <Service
              header="Scări de bloc"
              source="/services/scari-de-bloc-2x.png"
              flipped={true}
              id="scari-de-bloc"
            >
              <ServiceItem>Măturat în fața scării</ServiceItem>
              <ServiceItem>
                Curățarea ferestrelor și a ușii de la intrarea scării
              </ServiceItem>
              <ServiceItem>Șters cutii poștale</ServiceItem>
              <ServiceItem>Îndepărtarea pânzelor de păianjen</ServiceItem>
              <ServiceItem>Șters mâna curentă a balustradei</ServiceItem>
              <ServiceItem>Măturat și spălat scară</ServiceItem>
            </Service>

            <Service
              header="Curățenie de întreținere"
              source="/services/curatenie-de-intretinere-2x.png"
              flipped={false}
              id="curatenie-de-intretinere"
            >
              <ServiceItem>Aerisirea apartamentului</ServiceItem>
              <ServiceItem>
                Îndepărtarea pânzelor de păianjen Ștergerea lustrelor și a
                lămpilor
              </ServiceItem>
              <ServiceItem>
                Ștergerea întrerupătoarelor și a prizelor
              </ServiceItem>
              <ServiceItem>Ștergerea geamurilor și a pervazurilor</ServiceItem>
              <ServiceItem>
                Ștergerea prafului de pe toate suprafețele
              </ServiceItem>
              <ServiceItem>Spălare și igienizare baie și bucătărie</ServiceItem>
              <ServiceItem>Curățare scrumiere</ServiceItem>
              <ServiceItem>Aspirarea covoarelor și a podelelor</ServiceItem>
              <ServiceItem>
                Colectarea gunoiului și schimbarea sacilor de gunoi
              </ServiceItem>
              <ServiceItem>Spălarea podelelor</ServiceItem>
            </Service>
            <Service
              header="Curatenie regim hotelier"
              source="/services/regim-hotelier-2x.png"
              flipped={true}
              id="curatenie-regim-hotelier"
            >
              <ServiceItem>Aerisirea apartamentului</ServiceItem>
              <ServiceItem>Verificarea termostatului</ServiceItem>
              <ServiceItem>
                Colectarea gunoiului și schimbarea sacilor de gunoi
              </ServiceItem>
              <ServiceItem>
                Ștergerea prafului de pe toate suprafețele
              </ServiceItem>
              <ServiceItem>
                Igienizare frigider și cuptor cu microunde
              </ServiceItem>
              <ServiceItem>Igienizare baie și bucătărie</ServiceItem>
              <ServiceItem>Aspirarea covoarelor și a podelelor</ServiceItem>
              <ServiceItem>Spălarea podelelor</ServiceItem>
              <ServiceItem>Schimbarea lenjeriei și a prosoapelor</ServiceItem>
              <ServiceItem>
                Spălarea farfuriilor, tacâmurilor și a scrumierelor
              </ServiceItem>
              <ServiceItem>Înlocuire hârtie igienică</ServiceItem>
              <ServiceItem>Ștergerea oglinzilor</ServiceItem>
              <ServiceItem>Alte servicii la cerere</ServiceItem>
            </Service>
            <Service
              header="Curățenie Generală"
              source="/services/curatenie-generala-2x.png"
              flipped={false}
              id="curatenie-generala"
            >
              <ServiceItem>
                Îndepărtarea prafului și a pânzelor de păianjeni
              </ServiceItem>
              <ServiceItem>
                Ștergerea întrerupătoarelor, prizelor, plinte și corpuri de
                iluminat
              </ServiceItem>
              <ServiceItem>
                Curățarea ferestrelor interior și exterior cât și a tocăriei
                aferente
              </ServiceItem>
              <ServiceItem>
                Curățarea electrocasnicelor atât la interior cât și la exterior
              </ServiceItem>
              <ServiceItem>
                Igienizarea bucătăriei cât și dezinfectarea acesteia
              </ServiceItem>
              <ServiceItem>Curățarea calorifelor</ServiceItem>
              <ServiceItem>
                Ștergere mobilier la interior și exterior
              </ServiceItem>
              <ServiceItem>Curățare uși, tocuri și mânere</ServiceItem>
              <ServiceItem>
                Ștergere și îndepărtare calcar/piatra de pe faianță și baterii
              </ServiceItem>
              <ServiceItem>
                Igienizare și dezinfectare baie (cada, ghiuveta, vas toaletă)
              </ServiceItem>
              <ServiceItem>
                Aspirarea suprafețelor și folosirea de soluții profesionale
                pentru fiecare tip de suprafață
              </ServiceItem>
              <ServiceItem>Colectare și debarasarea gunoiului</ServiceItem>
              <ServiceItem>Aerisirea tuturor încăperilor</ServiceItem>
              <ServiceItem>Alte servicii la cerere</ServiceItem>
            </Service>
          </Col>
        </Row>
      </BlockContent>
    </Container>
  );
};

export default Services;
