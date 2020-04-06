import {Party} from '../../components/party/index';
import {PartyList} from '../../components/partyList/index';
import {Country} from '../../components/country/index';
import {CountryList} from '../../components/countryList/index';
import {ElectionList} from '../../components/electionList/index';
import {Election} from '../../components/election/index';
import {Continent} from "../../components/continent/index";
import Profile from '../../components/profile/index';
export default {
    Home: {
        component: Continent,
        path: '/home'
    },
    CountryList: {
        component: CountryList,
        path: '/countries'
    },
    Country: {
        component: Country,
        path: '/countries/:idCountry'
    },
    Party: {
        component: Party,
        path: '/parties/:idParty'
    },
    Parties: {
        component: PartyList,
        path: '/parties'
    },
    Elections: {
        component: ElectionList,
        path: '/elections'
    },
    Election:{
        component: Election,
        path: '/elections/:idElection'
    },
    Profile: {
        component: Profile,
        path: '/profile'
    },
};