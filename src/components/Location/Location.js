import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe title="mas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.4928305763747!2d-123.12916938431052!3d49.28600667933172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867180eb996587%3A0x5ce51a4bb93e7663!2sRobson+St%2C+Vancouver%2C+BC%2C+Canada!5e0!3m2!1sen!2sus!4v1562857063284!5m2!1sen!2sus"
             width="100%"
              height="500px" frameBorder="0" allowFullScreen></iframe>

              <div className="location_tag">
                  <div>Location</div>
              </div>
        </div>
    )
}

export default Location
