import React from "react"
import SeasonDisplay from "./SeasonDisplay"
import Loader from "./Loader"

class App extends React.Component {
    state = { latitude: null, longitude: null, err: "" };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                const { longitude, latitude } = position.coords;
                this.setState({ latitude, longitude })
            },
            err => this.setState({ err: err.message })
        );
    }

    renderContent() {
        if (this.state.latitude && this.state.longitude) {
            return (
                <div>
                    <h3>
                        <SeasonDisplay
                            lat={this.state.latitude}
                            lon={this.state.longitude}
                        />
                    </h3>
                </div>
            )
        }
        if (this.state.err) {
            return (
                <div>
                    <h3>
                        {`Error: ${this.state.err}`}
                    </h3>
                </div>
            );
        }
        return (
            <Loader
                message="Por favor, acepta la geolocalizaión..."
            />
        );
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default App;

