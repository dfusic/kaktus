import prices from "./prices.json";
import { Menu } from "./components/Menu";
import { Category } from "./components/Category";

const App = () => (
  <>
    <img
      src="https://dfusic.github.io/kaktus-cjenik/assets/images/sprite.svg"
      className="sprite"
      alt="Caffee bar Kaktus"
    />
    <img
      src="https://dfusic.github.io/kaktus-cjenik/assets/images/logo.svg"
      className="logo"
      alt="Caffee bar Kaktus"
    />
    <div className="cjenik">
      <div className="cjenik-title-wrapper">
        <h2 className="cjenik-title">Cjenik</h2>
      </div>
      <Menu menuItems={prices.categories} />
      <Category category={prices.topliNapici} id="topli-napici" />
      <Category category={prices.bezalkPica} id="bezalk-pica" />
      <Category category={prices.pivo} id="pivo" />
      <Category category={prices.vino} id="vino" />
      <Category category={prices.gin} id="gin" />
      <Category category={prices.whiskey} id="whiskey" />
      <Category category={prices.kokteli} id="kokteli" />
      <Category category={prices.mixPica} id="mix-pica" />
      <Category category={prices.zestokaPica} id="zestoka-pica" />
    </div>
    <img
      src="https://dfusic.github.io/kaktus-cjenik/assets/images/sprite-bottom.svg"
      className="sprite"
      alt="Caffee bar Kaktus"
    />
  </>
);

export default App;
