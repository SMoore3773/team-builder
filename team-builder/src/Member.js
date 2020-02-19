import React from "react";

const Member = props => {
    console.log(props)
    const tM= props.teamMembers;
    console.log('tM', tM);
    return (

        <div className='memberList'>
            {tM.map(member => (
                <div className='member' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Member;