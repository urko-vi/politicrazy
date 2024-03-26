import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Loading from '../loading';

const GET_PARTY = gql`
  query Party($shortname: String) {
    party(shortname: $shortname) {
    description
    partylogo
    partyname
    shortname
    }
  }
`;



export class Party extends React.Component {

    state = {
        shortname: null
    };

    componentDidMount () {

        console.log(this.props.match);
        const {shortname} = this.props.match.params;
        this.setState(() => ({ shortname }))
    }
    render() {


        return (<Query query={GET_PARTY} variables={this.state.shortname}>
            {({loading, error, data}) => {
                console.log(error);
                if (loading) return <Loading/>;
                if (error) return <Loading error={error}/>;
                console.log(data);
                return (
                    <PartyItem parties={data.party}/>
                )
            }}
        </Query>);

    }

}
const PartyItem = ({party})  => {
    console.log(party);
    return (<React.Fragment/>)
};