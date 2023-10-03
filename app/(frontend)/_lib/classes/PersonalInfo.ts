export type PersonalDataType = {
    name: string;
    surname: string;
    brief_description: string;
    social_media_data: PersonalInfoSocialAccountType[];
}

export const social_networks_list = ['Instagram', 'Telegram', 'Youtube', 'Github', 'Quora', 'Facebook', 'Reddit', 'Twitter'];

const social_networks_list_constexpr = ['Instagram', 'Telegram', 'Youtube', 'Github', 'Quora', 'Facebook', 'Reddit', 'Twitter'] as const;

export type SocialNetworkType = typeof social_networks_list_constexpr[number];

export type PersonalInfoSocialAccountType = {
    network_name: SocialNetworkType;
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