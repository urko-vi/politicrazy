import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Loading from '../loading/index';
import {CardGroup,Card,CardBody,CardTitle,CardSubtitle,CardLink,CardText,CardImg } from 'reactstrap';
import * as Proptypes from "prop-types";

const GET_PARTIES_LIST = gql`
  query {
    party{
    description
    partyname
    shortname
    partylogo
    }
  }
`;

export class PartyList extends React.Component {

    state = {
        auth: null
    }


    componentDidMount () {
     const auth =  this.props.auth;
    // console.log(this.props);
      //const idToken = auth.getIdToken();
     this.setState({auth:auth});
    }
    render() {
       // const idToken  = this.state.auth?this.state.auth.getIdToken():"";
        return (
            <Query query={GET_PARTIES_LIST}>
                {({ loading, error, data }) => {
                    console.log(error);
                    if (loading) return <Loading/>;
                    if (error) return <Loading/>;
                    console.log(data);

                    return (
                        <PartyListItem parties={data.party}/>
                    )
                }}
            </Query>

        );

    }
}
PartyList.propTypes = {
    route: Proptypes.object.isRequired,
    auth: Proptypes.object.isRequired
};
 const PartyListItem = ({parties})  => {
    console.log(parties);
     return (<CardGroup>
         {parties.map((party,key) => {
             return (<Card key={key}>
                 <CardImg width="100%" src={party.partylogo}  alt="Card image cap" />
                 <CardBody>
                     <CardTitle>{party.shortname}</CardTitle>
                     <CardSubtitle>{party.partyname}</CardSubtitle>
                 </CardBody>

                 <CardBody>
                     <CardText>{party.description}</CardText>
                     <CardLink href={'/parties/'+party.shortname}>See Party</CardLink>
                 </CardBody>
             </Card>)
         })}
        </CardGroup>);
 };
