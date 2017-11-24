import React, {Component} from 'react';
import AnimatedHeader from "./animatedHeader";

class Syver extends Component {

	render() {
		return (
			<span>
				<AnimatedHeader/>
				<div className="content">
					<div className="ingress-wrapper">
						<div className="ingress">
							<h3 className="topp_overskrift">Syver Enstad</h3>
							<p>
								Syver er en full stack utvikler med nærmere 20 års erfaring
								fra utvikling i Python, C++, Ruby og JavaScript.
								Han har utviklet frontend i React for Sparebank1, sikkerhetssystme
								programvare som kjører inne i videokonferanseutstyr,
								Han har spesielt interesse for kodekvalitet
								med sterkt typede og funksjonelle språk som OCaml og Erlang.
							</p>
						</div>
					</div>

					<div className="content">
						<h3 className="topp_overskrift">Prosjekter</h3>

							<div className="content__column">
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
									<a href="/7ver" className="panel panel__consultant">
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
									<a href="/2mas" className="panel panel__consultant">
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
											<a href='mailto:syver.enstad@gmail.com,thomas.flemming@gmail.com'>Syver &
												Thomas</a>
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
			</span>
		);
	}
}

export default Syver;
