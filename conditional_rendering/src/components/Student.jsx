import React from 'react'

const Student = () => {

    let studentData = {
        data: {
            atucalData: {
                name: "John",
                age: 20,
                isEnrolled: false
            }
        }
    }
    return (
        <div>  <hr></hr> Student Data  page

            <p>
                {studentData.data.atucalData.isEnrolled && (
                    <span>Student is enrolled name : {studentData.data.atucalData.name} </span>
                )}
                {!studentData.data.atucalData.isEnrolled && (
                    <span>Student is not enrolled name : {studentData.data.atucalData.name} </span>
                )}
            </p>

        </div>


    )
}

export default Student