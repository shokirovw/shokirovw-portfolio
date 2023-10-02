export type PersonalDataType = {
    name: string;
    surname: string;
    brief_description: string;
    social_media_data: PersonalInfoSocialAccountType[];
}

export type PersonalInfoSocialAccountType = {
    network_name: 'Instagram' | 'Telegram' | 'Youtube' | 'Github' | 'Quora' | 'Facebook' | 'Reddit' | 'Twitter';
    profile_link: `${'https://' | 'http://'}${string}`;
}

export abstract class PersonalInformation {
    private PersonalData: PersonalDataType;

    constructor () {}

    public async init () {
        this.PersonalData = await this.fetchData();

        return this;
    }

    protected abstract fetchData (): Promise<PersonalDataType>;

    public getFullName (): string {
        return this.PersonalData.name + " " + this.PersonalData.surname;
    }

    public getBriefDescription (): string {
        return this.PersonalData.brief_description;
    }

    public getSocialMediaInfo (): PersonalInfoSocialAccountType[] {
        return this.PersonalData.social_media_data;
    }
}