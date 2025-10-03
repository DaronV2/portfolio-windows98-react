import CustomImage from "./customImage";
type customPropsProExp = {
    title: string
    entrepriseName: string
    description: string
    logo: string
}

export default function ProfessionalExperience({title , entrepriseName , description, logo} : customPropsProExp){
    return (
        <div className="stage flex flex-col justify-start items-start">
            <p className="title-stage underline text-xl">
                - {title}
            </p>
            <p className=" underline stage-name-entreprise h-6 flex items-center"><CustomImage src={logo} alt="logo-enterprise" className="w-auto h-4 mr-2"/>{entrepriseName}</p>
            <p className=" stage-description text-left"> 
                - {description}
            </p>
        </div>
    );
}
