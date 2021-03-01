import React from "react"

const seasonConfig = {
    summer: {
        text: "Let's go to the beach. It's Summer",
        iconName: "sun"
    },
    winter: {
        text: "\"I love winter. It's the best!\"",
        iconName: "snowflake"
    }
}

const getSeason = function (lat, month) {
    if (month > 2 && month < 9)
        return lat > 0 ? "summer" : "winter";
    else
        return lat > 0 ? "winter" : "summer";
}

const SeasonDisplay = function (props) {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`} >
            <i className={`${iconName} icon massive first-icon`} />
            <h2 className="text">{text}</h2>
            <i className={`${iconName} icon massive second-icon`} />
        </div>
    );
}

export default SeasonDisplay;