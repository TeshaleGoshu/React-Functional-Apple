import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Firstsection from "./components/Firstsection";
import Secondsection from "./components/Secondsection";
import Thirdsection from "./components/Thirdsection";
import Fourthsection from "./components/Fourthsection";
import Fifthsection from "./components/Fifthsection";
import Sixthsection from "./components/Sixthsection";
function App() {
	return (
		<React.Fragment>
			<Header />
			<Firstsection />
			<Secondsection />
			<Thirdsection />
			<Fourthsection />
			<Fifthsection />
			<Sixthsection />
			<Footer />
		</React.Fragment>
	);
}

export default App;
