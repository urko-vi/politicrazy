import {Party} from '../../components/party';
import {PartyList} from '../../components/partyList';
import {Country} from '../../components/country';
import {CountryList} from '../../components/countryList';
import {ElectionList} from '../../components/electionList';
import {Election} from '../../components/election';
import {Continent} from "../../components/continent";
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