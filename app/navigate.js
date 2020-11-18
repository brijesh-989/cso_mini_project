import {createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import Splash from './splash'
import Home from './home'
import SelectStatem from './mpc/statesm'
import SelectStateb from './bpc/statesb'
import HimachalPradesh from '../assets/engineering/himachalpradesh/samp'
import Punjab from '../assets/engineering/punjab/samp'
import Delhi from '../assets/engineering/delhi/samp'
import UttarPradesh from '../assets/engineering/uttarpradesh/samp'
import Haryana from '../assets/engineering/haryana/samp'
import AndhraPradesh from '../assets/engineering/ap/samp'
import Telangana from '../assets/engineering/telangana/samp'
import TamilNadu from '../assets/engineering/tamilnadu/samp'
import Kerala from '../assets/engineering/kerala/samp'
import Karnataka from '../assets/engineering/karnataka/samp'
import Maharashtra from '../assets/engineering/maharashtra/samp'
import MadhyaPradesh from '../assets/engineering/mp/samp'
import Maharashtram from '../assets/medical/maharashtra/App'
import MadhyaPradeshm from '../assets/medical/mp/App'

import Delhim from '../assets/medical/delhi/App'
import HimachalPradeshm from '../assets/medical/himachalpradesh/App'
import Haryanam from '../assets/medical/haryana/App'
import Punjabm from '../assets/medical/punjab/App'
import UttarPradeshm from '../assets/medical/uttarpradesh/App'
import AndhraPradeshm from '../assets/medical/ap/App'
import Telanganam from '../assets/medical/telangana/App'
import TamilNadum from '../assets/medical/tamilnadu/App'
import Keralam from '../assets/medical/kerala/App'
import Karnatakam from '../assets/medical/karnataka/App'
import Law from '../assets/law/App'
import Management from '../assets/management/App'
import Designing from '../assets/designing/App'


const App=createStackNavigator({
    Splash:{screen:Splash,navigationOptions:{headerShown:false}},
    Home:{screen:Home,navigationOptions:{headerShown:false}},
    SelectStatem:{screen:SelectStatem,navigationOptions:{headerShown:false}},
    SelectStateb:{screen:SelectStateb,navigationOptions:{headerShown:false}},
    HimachalPradesh:{screen:HimachalPradesh,navigationOptions:{headerShown:false}},
    Punjab:{screen:Punjab,navigationOptions:{headerShown:false}},
    Delhi:{screen:Delhi,navigationOptions:{headerShown:false}},
    UttarPradesh:{screen:UttarPradesh,navigationOptions:{headerShown:false}},
    MadhyaPradesh:{screen:MadhyaPradesh,navigationOptions:{headerShown:false}},
    Maharashtra:{screen:Maharashtra,navigationOptions:{headerShown:false}},
    Haryana:{screen:Haryana,navigationOptions:{headerShown:false}},
    AndhraPradesh:{screen:AndhraPradesh,navigationOptions:{headerShown:false}},
    Telangana:{screen:Telangana,navigationOptions:{headerShown:false}},
    TamilNadu:{screen:TamilNadu,navigationOptions:{headerShown:false}},
    Kerala:{screen:Kerala,navigationOptions:{headerShown:false}},
    Karnataka:{screen:Karnataka,navigationOptions:{headerShown:false}},
    Delhim:{screen:Delhim,navigationOptions:{headerShown:false}},
    HimachalPradeshm:{screen:HimachalPradeshm,navigationOptions:{headerShown:false}},
    Haryanam:{screen:Haryanam,navigationOptions:{headerShown:false}},
    Punjabm:{screen:Punjabm,navigationOptions:{headerShown:false}},
    UttarPradeshm:{screen:UttarPradeshm,navigationOptions:{headerShown:false}},
    AndhraPradeshm:{screen:AndhraPradeshm,navigationOptions:{headerShown:false}},
    Telanganam:{screen:Telanganam,navigationOptions:{headerShown:false}},
    TamilNadum:{screen:TamilNadum,navigationOptions:{headerShown:false}},
    Keralam:{screen:Keralam,navigationOptions:{headerShown:false}},
    Karnatakam:{screen:Karnatakam,navigationOptions:{headerShown:false}},
    MadhyaPradeshm:{screen:MadhyaPradeshm,navigationOptions:{headerShown:false}},
    Maharashtram:{screen:Maharashtram,navigationOptions:{headerShown:false}},
    Designing:{screen:Designing,navigationOptions:{headerShown:false}},
    Management:{screen:Management,navigationOptions:{headerShown:false}},
    Law:{screen:Law,navigationOptions:{headerShown:false}},
});
export default createAppContainer(App);