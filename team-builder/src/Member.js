import React from "react";

const Member = props => {
    console.log(props)
    const tM= props.teamMembers;
    console.log('tM', tM);
    return (

        <div className='memberList'>
            {tM.map(member => (
                <div className='member' key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Member;