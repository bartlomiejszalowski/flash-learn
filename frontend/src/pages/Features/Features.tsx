import { Link } from "@tanstack/react-router";
import { Brain, Headphones, Layers, Mic, Trophy, Zap } from "lucide-react";

import { CustomCard } from "@/components/CustomCard/CustomCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Layers className="h-8 w-8 text-blue-500" />,
    title: "Różnorodne tryby nauki",
    description:
      "Od fiszek po ćwiczenia ze słuchu - dostosuj naukę do swoich potrzeb.",
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: "Inteligentne powtórki",
    description:
      "Algorytm dostosowuje częstotliwość powtórek do Twoich postępów.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Szybkie sesje nauki",
    description:
      "Ucz się nawet wtedy, gdy masz tylko kilka minut wolnego czasu.",
  },
  {
    icon: <Headphones className="h-8 w-8 text-green-500" />,
    title: "Ćwiczenia ze słuchu",
    description:
      "Rozwijaj umiejętność rozumienia ze słuchu z naszymi ćwiczeniami audio.",
  },
  {
    icon: <Mic className="h-8 w-8 text-red-500" />,
    title: "Ćwiczenia wymowy",
    description:
      "Trenuj wymowę z naszym zaawansowanym systemem rozpoznawania mowy.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-amber-500" />,
    title: "System motywacyjny",
    description: "Zdobywaj punkty i odznaki za swoje postępy w nauce.",
  },
];

const faqItems = [
  {
    question: "Czy aplikacja jest odpowiednia dla początkujących?",
    answer:
      "Tak, nasza aplikacja jest dostosowana do wszystkich poziomów zaawansowania, w tym dla osób początkujących. Oferujemy różnorodne tryby nauki i dostosowujemy trudność do Twoich postępów.",
  },
  {
    question: "Ile słówek mogę nauczyć się dziennie?",
    answer:
      "Liczba słówek, których możesz się nauczyć, zależy od Twojego zaangażowania i czasu poświęconego na naukę. Nasz system inteligentnych powtórek pomoże Ci efektywnie przyswajać nowe słownictwo w tempie dostosowanym do Twoich możliwości.",
  },
  {
    question: "Czy mogę tworzyć własne zestawy słówek?",
    answer:
      "Tak, nasza aplikacja umożliwia tworzenie własnych zestawów słówek. Możesz też korzystać z gotowych kolekcji przygotowanych przez naszych ekspertów językowych.",
  },
  {
    question: "Czy aplikacja działa offline?",
    answer:
      "Tak, większość funkcji naszej aplikacji działa offline. Możesz pobierać zestawy słówek i korzystać z nich bez dostępu do internetu.",
  },
];

export const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Odkryj możliwości FlashLearn
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Poznaj funkcje, które sprawią, że nauka języka stanie się efektywna i
          przyjemna
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Główne funkcje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    <span className="ml-2">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Co daje nauka z nami?
          </h2>
          <CustomCard type="learningEfficiency" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Często zadawane pytania
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gotowy, aby rozpocząć naukę?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Dołącz do tysięcy zadowolonych użytkowników i zacznij efektywną
            naukę języka już dziś!
          </p>
          <Button asChild size="lg">
            <Link href="/register">Zarejestruj się za darmo</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 FlashLearn. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};
