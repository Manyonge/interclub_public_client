export default interface League{
    _id: string;
    name: string;
    acronym: string;
    description: string;
    selected: boolean;
}

export interface Club{
    _id: string;
    name: string;

}
export interface ClubMatch{
    _id: string;
    title: string;
    allDay: boolean;
    homeClub: Club;
    awayClub: Club;
    date: string;
    areHomePlayersGenerated: boolean;
    areAwayPlayersGenerated: boolean;
    start: string;
    end: string;
}