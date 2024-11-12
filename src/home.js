import React, {useState, useEffect} from "react";

const Home = ( props ) => { 
    const logo1A = props.logo1A;
    const {
        rt10, rt31, rt12, rt1, rt2, rt4, rt5, rt6, 
        rt7, rt8, rt9, rt11, rt14, rt16, rt19, rt21, 
        rt22, rt23, rt25, rt26, rt28, rt30, rt32, 
        rt33, rt34, rt35, rt36

    } = props.allImg;
    const justImg2 = props.allImg2;
    const copyPasteImg = props.copyPasteBtn;
    const {socioLogo} = props;

    const image1 = [
        rt31, rt7, rt8, rt9, rt11, rt14, rt16, rt19, rt21
    ] 
    const image2 = [
        rt30, rt32, rt10, rt22, rt23, rt25, rt26, rt28 
    ] 
    const image3 = [
        rt12, rt33, rt34, rt35, rt36, rt1, rt2, rt4, rt5, rt6
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image1.length);
        }, 1 * 3000); 

        return() => clearInterval(interval);
    }, [image1.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image2.length);
        }, 1 * 2500); 

        return() => clearInterval(interval);
    }, [image2.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image3.length);
        }, 1 * 3000); 

        return() => clearInterval(interval);
    }, [image3.length]);

    const [text, setTxt] = useState("Be78Ld3SpYMif5YgxM4ipJx2eGSDcAaaCkHUzcV5pump");
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert("CA copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy text:", err)
        }) ;
    }

    return(
        <div className="homePage">
            <div className="imgSet">
                <span>
                    <img src={logo1A} alt="img" />
                </span>
            </div>
            <div className="imgSet1">
                <span>
                    <img src={image2[currentImageIndex]} alt="img" />
                </span>
                <span>
                    <img src={image1[currentImageIndex]} alt="img" />
                </span>
                <span>
                    <img src={image3[currentImageIndex]} alt="img" />
                </span>
            </div>
            <div className="descrpt">
                <h3>
                    Many experts recommend investing 10-15 percent of your annual 
                    salary in a retirement savings vehicle like a 42069(k) - 
                    $42069k is a parody meme coin.
                </h3>
            </div>
            <div className="caSection">
                <span>
                    <h5>
                        Ca:
                    </h5>
                    <p>
                        {text}
                    </p>
                </span>
                <span>
                    <img onClick={handleCopy} src={copyPasteImg.copyBtn} alt="copy btn"/>
                </span>
            </div>
            <div className="allSC-Btn">
                <div className="allSocHandle">
                    <span><a href="https://x.com/retirement_sol" target="_blank"><img src={socioLogo.tw} alt="twitter logo" /></a></span>
                    <span><a href="https://t.me/Sol_42069K"><img src={socioLogo.tg} alt="telegram logo" /></a></span>
                    <span><a href="https://pump.fun/Be78Ld3SpYMif5YgxM4ipJx2eGSDcAaaCkHUzcV5pump" target="_blank"><img src={socioLogo.pf} alt="pumpfun logo" /></a></span>
                    <span><a href="https://raydium.io/swap/?inputMint=sol&outputMint=Be78Ld3SpYMif5YgxM4ipJx2eGSDcAaaCkHUzcV5pump" target="_blank"><img src={socioLogo.ray} alt="raydium logo" /></a></span>
                    <span><a href="https://dexscreener.com/solana/CcQXUV35fs4jpkfKFfPfzRSycwnGaZZTrfhvmEdTtKRk" target="_blank"><img src={socioLogo.dexs} alt="dexscreener logo" /></a></span>
                    <span><a href="https://www.dextools.io/app/en/solana/pair-explorer/CcQXUV35fs4jpkfKFfPfzRSycwnGaZZTrfhvmEdTtKRk?t=1731421646570" target="_blank"><img src={socioLogo.dext} alt="dextools logo" /></a></span>
                </div>
                <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=Be78Ld3SpYMif5YgxM4ipJx2eGSDcAaaCkHUzcV5pump" target="_blank">Buy $42069k</a></button>
            </div>
            <div className="ruleBox">
                <h2>RULES</h2>
                <ul>
                    <li>
                        <h4>
                            Contribution Limits:
                        </h4>
                        <p>
                            The maximum amount an individual can contribute to a 42069(k) 
                            plan in 2042 is $700,000,000 or 14# if the individual is 50 
                            or older.
                        </p>
                    </li>
                    <li>
                        <h4>
                            Withdrawal Age:
                        </h4>
                        <p>
                            An individual may begin withdrawing money from their 42069(k) 
                            when they are 59 1/2 years old, or if they meet certain exception, 
                            like mental illness.
                        </p>
                    </li>
                    <li>
                        <h4>
                            Withdrawal Penalties:
                        </h4>
                        <p>
                            If an individual withdraws money before meeting the age requirement,
                            they will be subject to a 100% penalty tax and shot into the sun.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="imgSet2">
                <span>
                    <img src={justImg2.rt3} alt="img" />
                </span>
                <span>
                    <img src={justImg2.rt13} alt="img" />
                </span>
                <span>
                    <img src={justImg2.rt20} alt="img" />
                </span>
                <span>
                    <img src={justImg2.rt17} alt="img" />
                </span>
            </div>
        </div>
    )
}

export default Home;