import {h} from "preact";
import {useEffect} from 'preact/hooks';
import style from '../homepage/style.css';
import Markdown from "markdown-to-jsx";
import {usePrerenderData} from "@preact/prerender-data-provider";

const Homepage = (props) => {

    // /**
    //  * Netlify CMS's accept invite link land on home page.
    //  * This redirection takes it to the right place(/admin).
    //  */
	//
    // useEffect((props) => {
    //     if (window !== undefined && window.location.href.includes('#invite_token')) {
    //         const {href} = window.location;
    //         window.location.href = `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
    //     }
    // }, []);
	const [data, isLoading] = usePrerenderData(props);
	console.log(data)
    if (data && data.data) {
        const content = data.data;
        const section1 = content.edges[0].details
        const section2 = content.edges[1].details
        return (
			// <section id="intro">
			// </section>


            // <div>
				<div id="intro" class={style.intro}>
					{/*<h1 style={"text-align: center;color: white;"}>*/}
					{/*	{section1.body}*/}
					{/*</h1>*/}
					{<div class={style.intro} style={`background-image:url(${section1.cover})`}/>}
                    {<div class={style.intro} style={`background-image:url(${section2.cover})`}/>}
				</div>


            // </div>
        );
    }
};

export default Homepage;
