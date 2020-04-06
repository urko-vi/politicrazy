import React, { Component } from 'react';
import Loading from "../loading";
export default class User extends Component {
    state = {
        profile: null,
    };
    componentDidMount() {
        this.setState({ profile: null });

    }
    render() {
        const { profile } = this.state;
        if(profile === null){
            return (
                <Loading error={null} pastDelay={true} timedOut={null}/>
            )
        } else {
            return (
                <div className="container">
                    <div className="profile-area">
                        <h1>{profile.name}</h1>

                        <img src={profile.picture} alt="profile"/>
                        <div>

                            <h3>{profile.nickname}</h3>
                        </div>
                        <pre>{JSON.stringify(profile, null, 2)}</pre>
                    </div>
                </div>
            );
        }
    }

}