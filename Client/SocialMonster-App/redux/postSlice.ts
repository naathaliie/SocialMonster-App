import { DeletePostPayload, Posts, onePost } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Initial state med typ

const initialPostState: Posts = [
  {
    id: 1,
    author: 1,
    title: "Drakens Förbannelse",
    bodyText:
      "Draken har burit på sin förbannelse i århundraden. En gång en varelse av ljus och styrka, men nu tvingad att leva i skuggan av sina egna handlingar. Hans kraft över elden är inte bara en gåva, utan en förbannelse som bränner hans själ varje gång han använder den.",
  },
  {
    id: 2,
    author: 1,
    title: "Flammorna från Helvetet",
    bodyText:
      "När Draken slår sina vingar, sprakar luften av eld och aska. Han har lärt sig att kontrollera denna kraft, men ibland känns det som om elden är hans enda vän. Den fördärvar allt den rör vid, och ändå känner han sig dragen till dess hetta, som om han har blivit en del av den.",
  },

  {
    id: 3,
    author: 2,
    title: "Tigerns Mörka Själsresa",
    bodyText:
      "Tiger har vandrat genom djungeln under mörka nätter, där skuggor rör sig som levande varelser. Han har stött på varelser som han inte kan förklara, med ögon som glöder av en ockult kraft. Dessa väsen viskar hans namn, men Tiger vet inte om de är hans fiender eller hans enda chans till överlevnad.",
  },
  {
    id: 4,
    author: 2,
    title: "Jaktens Ondska",
    bodyText:
      "En natt i djungeln kände Tiger en närvaro bakom sig. En skepnad, lika stor som han, men med mörka ögon som reflekterade inget ljus. Det var som om skuggorna själva jagade honom. I denna natt lärde Tiger sig att det finns saker i mörkret som inte kan besegras med styrka.",
  },
  {
    id: 5,
    author: 2,
    title: "Den Ockulta Styrkan",
    bodyText:
      "Tiger har ofta undrat om det finns en dolda krafter som styr hans väg i livet. Hans instinkter är skarpa, men ibland känns det som om någon eller något annat styr honom från skuggorna. I djungeln finns en kraft som är äldre än själva naturen – och den är inte alltid vänlig.",
  },

  {
    id: 6,
    author: 3,
    title: "Ugglans Visdom",
    bodyText:
      "Ugglan har flugit genom nattens mörker i tusentals år. Hon har sett världen förändras, men en sak har alltid varit konstant: skuggorna som rör sig på kanten av synfältet. Hon vet att dessa skuggor inte är vanliga väsen. De är de forntida krafter som vakar över skogen, och de väntar på att någon ska väcka dem.",
  },

  {
    id: 7,
    author: 4,
    title: "Lövens Rike av Skuggor",
    bodyText:
      "Löven har varit kung i sitt rike i många år, men det finns något som inte känns rätt. Skuggor har börjat röra sig vid gränsen till hans territorium. Varelser, från en annan värld, viskar hans namn i vinden. De säger att hans tid som ledare är över, och en mörk makt kommer att ta hans plats.",
  },
  {
    id: 8,
    author: 4,
    title: "Skuggornas Väktare",
    bodyText:
      "Löven har stött på skepnader som inte är av denna värld. Dessa varelser från de mörkaste hörnen av skogen har länge hållit sitt avstånd. Men nu är de nära, och Löven känner en uråldrig kraft som växer i mörkret. Är de hans fiender, eller har han blivit utvald för att möta något mycket större än han själv?",
  },
  {
    id: 9,
    author: 4,
    title: "Blodets Ritual",
    bodyText:
      "Löven har deltagit i en hemlig ritual som ger honom en koppling till de uråldriga krafterna i skogen. Men när han slöt sina ögon under ceremonin, såg han något skrämmande – en mörk skepnad som visade sig vara en annan varelse, en varelse som han kanske inte är så ensam om att vara.",
  },

  {
    id: 10,
    author: 5,
    title: "Vargens Mörka Flock",
    bodyText:
      "Vargen har alltid varit en del av flocken, men han börjar känna att något är fel. Det finns mörka krafter som drar honom bortom flocken, bortom tryggheten. Han har känt närvaron av dessa krafter när han jagat, och han vet att de söker honom – och flocken – för något mycket större än bara en jakt.",
  },
  {
    id: 11,
    author: 5,
    title: "Månens Förbannelse",
    bodyText:
      "När fullmånen stiger på himlen, känner Vargen en förändring inom sig. Hans syn blir skarpare, hans krafter starkare, men samtidigt dras han mot något han inte kan förklara. En urgammal förbannelse verkar vara förknippad med hans blodslinje, och Vargen är fast besluten att förstå den innan den slukar honom.",
  },
  {
    id: 12,
    author: 5,
    title: "Flockens Mörka Hemlighet",
    bodyText:
      "Vargen har upptäckt att flocken bär på en hemlighet som går tillbaka i tiden. Det är en hemlighet som involverar mörka krafter som styr deras öde. Vargen måste nu ta ett svårt beslut: att avslöja sanningen för flocken, eller att låta denna mörka kraft förbli fördold för evigt.",
  },

  {
    id: 13,
    author: 6,
    title: "Havsörnens Mörka Horisont",
    bodyText:
      "Havsörnen har flugit genom stormar och vindar, men det finns något annorlunda med den här gången. Horisonten är mörkare än vanligt, och vinden bär med sig viskningar från en annan värld. Hon känner närvaron av något onaturligt som dröjer sig kvar vid kanten av hennes synfält, som en mörk skugga som inte går att få bort.",
  },
  {
    id: 14,
    author: 6,
    title: "Fjädrarnas Ockulta Kraft",
    bodyText:
      "Havsörnen har alltid trott på sina fjädrars styrka, men efter en mystisk upplevelse börjar hon undra om det finns något mer till hennes krafter. När hon flög genom en storm, kände hon en kall hand på sin vinge. Det var som om någon annan styrde hennes rörelser, och hon undrar nu om hennes fjädrar är besatta av en okänd kraft.",
  },
  {
    id: 15,
    author: 6,
    title: "Vinden från De Dödas Rike",
    bodyText:
      "Havsörnen har alltid flugit med vinden, men den här gången känns det annorlunda. Vinden bär med sig dofter från en annan värld, en värld som inte borde existera. Hon hör viskningar som inte kommer från någon levande varelse, och hon undrar om vinden har blivit en port till en plats där döda själar vilar.",
  },

  {
    id: 16,
    author: 7,
    title: "Björnens Mörka Återkomst",
    bodyText:
      "Björnens vintersömn har alltid varit en tid för vila, men den här gången är annorlunda. Under sin sömn har han drömt om en värld fylld av skuggor och onaturliga varelser. Nu när han vaknar, känns världen kallare, och han vet att något mörkt har hänt medan han var borta.",
  },
  {
    id: 17,
    author: 7,
    title: "Vildmarkens Förbannelse",
    bodyText:
      "Björnens jakt på föda leder honom till en plats som han alltid har undvikit. Där, djupt inne i skogen, finns en gammal tempelruin som bär på mörka krafter. Björnen känner sig dragen dit, men han vet också att detta kan vara början på hans undergång.",
  },
  {
    id: 18,
    author: 7,
    title: "Vårens Mörka Skepnad",
    bodyText:
      "Björnens känslor när våren närmar sig är blandade. Snön smälter och världen vaknar till liv, men i skuggorna rör sig något annat. Något ondskefullt som inte hör hemma i denna värld. Björnens sinnen är skärpta, och han vet att mörka krafter håller på att göra sitt intåg.",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    //Action för att lägga till en post
    addPost: (state, action: PayloadAction<onePost>) => {
      state.push(action.payload);
    },
    //Action för att radera en post (skicka med en egen typ DeletePostpayload för att kunna skicka med både monster.id och post.id)
    deletePost: (state, action: PayloadAction<DeletePostPayload>) => {
      state.filter((post) => {
        return !(
          post.author === action.payload.monsterId &&
          post.id === action.payload.postId
        );
      });
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
