# Treść zadania

Do realizacji tego zadania wystarczy maksymalnie 30 minut. Ze względów technicznych dopuszczalny czas to 45 minut.

Na wzór przykładu proszę przygotować implementację "printf" wykorzystująca #.Zj jako zamiennik %.Zx (gdzie Z to liczba całkowita),  który dodatkowo dla drukowanej liczby szesnastkowej każdą cyfrę z przedziału a-f zamieni na przedział g-l: a -> g, b -> h, c -> i, d -> j, e->k, f-> l. Natomiast cyfra 0 jest zamieniana na literę o (0 -> o).

Proszę załączyć całość projektu spakowaną zipem. Równocześnie projekt musi się znajdować na githubie z odpowiednią nazwą katalogu (z tytułu zadania w nawiasach - ta część która jest w nawiasach z tytułu zadania(np "labX")). Przykładowo jeśli tytuł zadania to "Zadanie xyz (abc)" to proszę umieścić Makefile ( i resztę plików) w katalogu "abc". Państwa projekt powinien zawierać 10 testów i wszystkie testy powinny przechodzić poprawnie.

Na samej górze pola tekstowego powinien się znajdować link("REPO") do tego konkretnego projektu z Państwa githuba, a  (oddzielony SHIFT+ENTEREM) niżej link do pliku zawierającego "główny" kod źródłowy ("KOD"). Podsumowując dwie pierwsze linie pola tekstowego to dwa słowa: REPO i KOD. Oba jako linki. Wklejone linki mają być "klikalne", w przeciwnym razie zadanie nie zostanie sprawdzone. Proszę opisać z czym w zadaniu mieli Państwo największy problem (nawet jeśli wykonali Państwo całość zadania). W polu tekstowym przy zgłaszaniu zadania należy napisać, jeśli nie udało się zrealizować całego zadania, to proszę opisać, co jest zrobione, a czego brakuje.

W celu uniknięcia problemów z wrzucaniem projektu na wikamp zaleca się wrzucanie całego projektu i aktualizację opisu co 30 minut. Nie stosowanie się do tych wytycznych (brak wrzucania wersji przynajmniej co godzinę) będzie skutkować obniżeniem oceny.

# Uruchamianie

Use `make all` to build project

Use `make tests` to test project

Use `make all && make tests` to build and test project

Use `make manual_test` to run manual test (you have to edit printf_manual_test.c to change command)