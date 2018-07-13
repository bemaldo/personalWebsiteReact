import React, {Component} from 'react';
import WorkExperience from './work_experience';
import Education from './education';
import ProfileOverview from './profile_overview';
import SelfDevelopment from './self_development';

export default class App extends Component{
    render(){
        return(
            <div className="appRoot">
                
                <div className="col-sm-4">
                    <ProfileOverview />
                </div>
                <div className="backgroundShadow col-sm-8">
                    <WorkExperience />
                    <div className="entriesContainer">
                        <Education />
                        <SelfDevelopment />
                    </div>
                </div>
                 

            </div>
        );
    }
}