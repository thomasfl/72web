import React, {Component} from 'react';
import SVG  from 'react-inlinesvg';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="photo_background">
					<div className="logo">
						<SVG className="72web-svg" src="logo.svg"/>
					</div>
				</div>
				<div className="content">
					<div className="ingress-wrapper">
						<div className="ingress">
							<h3 className="topp_overskrift">Hvem er vi?</h3>
							<p>
								72web er et norsk konsulentselskap som
								leverer design av brukeropplevelser, utvikling og rådgivning.
								Vi utvikler nettsteder fra konsept, tjenestedesign og interaksjonsdesign
								til systemutvkling, integrasjon og systemarkitektur.
							</p>
						</div>
					</div>

					<div className="content">

						<h3 className="topp_overskrift">Tjenester</h3>

						<div style={{display: "block", width: "100%"}}>
							<div style={{
								display: "inline-block",
								maxWidth: "1000px"
							}}>

								<div className="container">

									<div className="panel sentrert">
										<img alt="" className="panel_icon" src="/utvikling_noun_1138975_cc.gif"/>
										<br/><br/>
										Systemutvikling, integrasjon og prosjektledelse
									</div>
									<div className="panel sentrert">
										<img alt="" className="panel_icon" src="/ux_noun_874620_cc.gif"/>
										<br/><br/>
										UX, interaksjonsdesign og tjenestedesign.
									</div>
									<div className="panel sentrert">
										<img alt="" className="panel_icon" src="/konsultasjon_noun_1231188_cc.gif"/>
										<br/><br/>
										Teknologirådgivning, forretningsmodeller
										og sikkerhet.
									</div>
								</div>

								<h3 className="topp_overskrift">Konsulenter</h3>
								<div className="container">
									<a href="/7ver" className="panel">
										<h1>Syver Enstad</h1>
										<p>
											Full stack utvikler.
											Erfaring med Python, Ruby, Elm, React, C++ og Java.
											Interressert i Erlang og paradigmer innen programutvikling.
										</p>
										<span className="caretWrapper">
									<span className="caretRight"/>
								</span>
									</a>
									<a href="/2mas" className="panel">
										<h1>Thomas Flemming</h1>
										<p>
											Full stack konsulent.
											Erfaring med JavaScript, React, Java, Node, Ruby og prosjektledelse.
											Interressert i UX, motion design og maskinlæring.
										</p>
										<span className="caretWrapper">
									<span className="caretRight"/>
								</span>
									</a>
								</div>
								<div className="container">
									<div className="panel gjennomsiktig">
										<b>Besøksadresse</b>
										<p>
											Enerhauggata 7, 0651 Oslo
										</p>
										<b>E-post</b>
										<p>
											<a href='mailto:syver.enstad@gmail.com,thomas.flemming@gmail.com'>Syver & Thomas</a>
										</p>
										<b>Organisasjonsummer</b>
										<p>
											916 803 966
										</p>
									</div>
									<div className="panel gjennomsiktig">
									</div>
								</div>

							</div>
						</div>


					</div>

				</div>
			</div>
		);
	}
}

export default App;
