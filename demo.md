---
title: V5 - Versuch zur Feststellung der spezifischen Ladung des Elektrons
author: Florian Daßler, Team A, Gruppe 4 <br>Versuchspartner: Tom Müller<br>Betreuer: Paul Zech
affiliation: 14. April 2021
style: https://alphamc.ddns.net/marker/scidown_report.css
class: report
numbering: true
---

@abstract

1. Untersuchen Sie die Abhängigkeit des Bahnradius eines Elektrons im Fadenstrahlrohr von der
Beschleunigungsspannung und der Stärke des äußerem Magnetfeldes.
2. Bestimmen Sie die spezifische Ladung des Elektrons. Führen Sie eine Größtfehlerberechnung
durch.

@/

@toc

# Ziel des Versuches

Ziel des Versuches ist die experimentelle Bestimmung der spezifischen Ladung
des Elektrons, d.h. den Quotienten $e \over m_e$, und die dazugehörige
Fehlerbetrachtung.


# Grundlagen des Versuches

## Beschreibung

Bei den Versuch wird genutzt, dass aufgrund der Lorentzkraft $F_L $ bewegte 
Elektronen in einen homogenen 
magnetischen Feld eine Kreisbahn (oder eine Schraubenbahn, für diesen Versuch 
ist dies aber nicht relevant) beschreiben, deren Radius neben der Geschwindigkeit
des Elektrons $v$ und der Stärke des magnetischen Feldes $B$ auch von der 
spezifischen Masse des Elektrons abhängt. Daher kann, wenn die Parameter $v$ und
$B$ bekannt sind, die spezifische Ladung berechnet werden.  
Zur durchführung des Versuches wird eine Fadenstrahlröhre verwendet, mit welcher
ein Strahl Elektronen erzeugt werden kann. Die sonst evakuierte Röhre ist mit 
einer geringen Menge Wasserstoff gefüllt, um den Strahl durch Fluoreszenz sichtbar
zu machen. Mittels eines Helmholtz-Spulenpaars, in den die Fadenstrahlröhre sich befindet,
kann das zur Ablenkung notwendige variable, homogene Magnetfeld zur Verfügung gestellt weden.

Nachdem es mit den 
Millikan-Versuch bereits gelungen war, die Ladung des Elektrons 
(die Elementarladung $ q = -e = -1{,}602 \cdot 10^{-19} C$) 
festzustellen, konne nun mithilfe dieses Versuches die Masse des Elektrons
über die oben genannte spezifische Ladung bestimmt werden.

## Benötigte Gleichungen
### Bahnradius der Kreisbahn [^5]
@equation()
r = \frac{1}{B} \sqrt{\frac{2m_0U}{e}}
@/

Bedeutung der Größen:  
$r$ ... Bahnradius der Kreisbahn, welche das Elektron beschreibt  
$B$ ... Magnetische Flussdichte des Magnetfeldes, welches die Röhre durchströmt   
$U$ ... Beschleunigungsspannung, welche an der Fadenstrahlröhre anliegt  
$m_0$ ... Ruhemasse des Elektron ($m_0 = 9{,}109 \cdot 10^{-31} kg$)  
$e$ ... Elementarladung ($ e = 1{,}602 \cdot 10^{-19} C$)

### Spezifische Ladung des Elektrons [^1]

@equation()
\frac{e}{m} = \frac{2 \, U}{r^2\cdot B^2} 
@/

Bedeutung der Größen:  
$\frac{e}{m}$ ... Spezifische Ladung des Elektrons  
$U$ ... Beschleunigungsspannung, welche an der Fadenstrahlröhre anliegt  
$r$ ... Bahnradius der Kreisbahn, welche das Elektron beschreibt  
$B$ ... Magnetische Flussdichte des Magnetfeldes, welches die Röhre durchströmt

### Magnetische Flussdichte im Inneren des Helmholtz-Spulenpaars [^2]
@equation()
B = \mu_0 \left (\frac{4}{5} \right) ^ \frac{3}{2} \cdot \frac{NI}{R}
@/

Bedeutung der Größen:  
$B$ ... Magnetische Flussdichte im Inneren des Helmholtz-Spulenpaars  
$\mu_0$ ... Permeabilitätskonstante des Vakuums ($\mu_0 = 4\pi\cdot10^{-7} \frac{Vs}{Am}$)  
$I$ ... Stromstärke in den Helmholtz-Spulen  
$N$ ... Windungszahl pro Helmholtz-Spule  
$R$ ... Radius der Helmholtz-Spulen

# Durchführung

@figure()
![Versuchsanordnung](https://www.leifiphysik.de/sites/default/files/h5p/content/187/images/file-5b39e87c92a56.png)
@caption(Schematischer Aufbau des Veruches [^3] <br>Der Wehneltzylinder fehlt in dieser Darstellung, dies ist aber unproblematisch,<br> weil dieser aufgrund eines defekts im Stromversorgungsgerät ohne Funktion war)
@/

## Verwendete Geräte mit Garantiefehlern

1. Fadenstrahlröhre mit Helmholtzspulen und Spiegel zur parallaxenfreien Ablesung des Bahnradius
2. Stromversorgungsgerät für Fadenstrahlröhre mit integrierten Digitalmessgeräten für Beschleunigungs-spannung und Spulenstrom  
  $\frac{\Delta U}{U} = 0{,}05$  
  $\frac{\Delta I}{I} = 0{,}05$
3. Digitaler Messschieber  
  $\Delta d = 0{,}03mm \rightarrow \Delta r = 0{,}015mm$
  
## Konstanten im Versuchsaufbau

$N = 130$ (Windungszahl pro Helmholtz-Spule)  
$R = 0{,}15m$ (Radius der Helmholtz-Spulen)

## Messwerte

@table()

| $U$ in $V$ | $r$ in $mm$ | $\frac{e}{m}$ in $10^{11} \frac{C}{kg}$|
| :-----: | :----:| :-----:|
| 510 | 59,17 |  1,4017  |
| 450 | 56,09 |  1,3766  |
| 375 | 49,10 |  1,4967  |
| 300 | 44,46 |  1,4607  |
| 200 | 36,90 |  1,4134  |

@caption(Unterschiedliche Beschleunigungsspannungen bei I = 1,85A)
@/

@table()

| $I$ in $A$ | $r$ in $mm$ | $\frac{e}{m}$ in $10^{11} \frac{C}{kg}$|
| :-----: | :----:| :-----:|
| 1,16 | 61,86 |  1,2793  |
| 1,30 | 52,22 |  1,4295  |
| 1,50 | 45,22 |  1,4316  |
| 1,70 | 39,61 |  1,4530  |
| 1,97 | 32,57 |  1,5999  |

@caption(Unterschiedliche Spulenströme bei U = 200V)
@/

# Auswertung
## Graphische Darstellung der Messdaten

@figure(fig:plot)
```charter
width: 800
height: 400
plot:
	x: 22.58 21.21 19.36 17.32 14.14
	y: 59.17 56.09 49.10 44.46 36.90
	label: r(√U)
	marker: o
	ls: --
x-axis:
	label: √U in √V
y-axis:
	label: r in mm
	range: 35 65
```

@caption(r\(√U\) - Diagramm aus Tabelle \(1\))
@/

@figure(fig:plot)
```charter
width: 800
height: 400
plot:
	x: 1.16 1.3 1.5 1.7 1.97
	y: 61.86 52.22 45.22 39.61 32.57
	label: r(I)
	marker: o
	ls: --
x-axis:
	label: I in A
	range: 1.1 2.1
y-axis:
	label: r in mm
	range: 25 65
```

@caption(r\(I\) - Diagramm aus Tabelle \(2\))
@/

## Interprätation der Graphik

**Darstellung 2**: Aus der Gleichung **(1)** folgt, dass $r \sim \sqrt{U} $ sein sollte.
Dies lässt sich an der Darstellung auch erkennen, weil die Punkte der Messreihe
nahezu eine Gerade bilden, die bei Verlängerung duch den Ursprung gehen würde.
Messwert 4 weicht von dieser Gerade etwas ab, was wahrscheinlich auf einen Messfehler
zurückzuführen ist

**Darstellung 3**: Aus der Gleichung folgt ebenfalls, dass dass $r \sim \frac{1}{B} $
sein sollte. Da laut Gleichung **(3)** der Zusammenhang $B \sim I$ besteht ist
folglich auch $r \sim \frac{1}{I} $. Diese umgekehrte Proportionalität
sollte sich im Diagramm durch einen 
hyperbelastförmigen Verlauf der Messwerte manifestieren. Dies ist im Diagramm
unter anderem aufgrund der geringen Anzahl der Messwerte etwas schwer zu erkennen.
Die grundlegenden Eigenschaften eines Hyperbelastes sind aber gegeben, d.h. der 
Radius nimmt bei zunehmenden Strom ab und der Graph wird bei zunehmenden Strom flacher.

## Mittelung der Messdaten

Aus den 10 ermittelten Messdaten ergibt sich das arithmetische Mittel der spezifischen
Ladung mit

$$\overline{\left(\frac{e}{m}\right)} = 1{,}4351 \cdot 10^{11} \frac{C}{kg}$$

bei einer Standartabwechung

$$\sigma = 0{,}0780 \cdot 10^{11} \frac{C}{kg}$$

Der tatsächliche Wert beträgt 
$\frac{e}{m} = 1{,}758\,820\,010\,76\,\cdot\,10^{11}\,\mathrm{\frac{C}{kg}}$ [^4].
Aus der hohen Abweichung von $\Delta\left(\frac{e}{m}\right) = 0{,}32372\cdot 10^{11} \frac{C}{kg}$
bei gleichzeitig geringer Standartabweichung lässt sich vermuten, dass ein systematischer 
Fehler diese Diskrepanz verursacht hat. Darauf wird näher in der Auswertung eigegangen.

## Beispielrechnung an einen Datensatz
### Fehler der einzelnen Größen
Die Beschleunigungsspannung $U$, der Spulenstrom $I$ und der Bahnradius $r$ unterliegen,
da es sich hierbei um gemessene Größen handelt, immer einen gewissen Fehler.
Der Garantiefehler für Das Volt-und Ampèremeter sind bekannt:  

$\frac{\Delta U}{U} = 0{,}05$  

$\frac{\Delta I}{I} = 0{,}05$

Für den Radius ist bisher nur der absolute Garantiefehler des Messschiebers
$\Delta r = 0{,}015mm$ bekannt. Es ist aber davon auszugehen, dass aufgrund der 
manuellen Messung des Bahnradius über den Durchmesser ein erheblicher zufälliger
Fehler entsteht. Dazu wurde bei gleicher Einstellung der Fadenstrahlröhre 5 Messungen
des Bahnradius durchgeführt:

@table()

| $r$ in $mm$ |
| :-----: |
| 32,57 |
| 34,02 |
| 31,77 |
| 33,25 |
| 33,66 |


@caption(Mehrmaliges Messen des Radius bei U = 200V und I = 1,97A)
@/

Es ergibt sich daraus der arithmetische Mittelwert des Radius

$\overline{r} = 33{,}05mm$

bei einer Standartabweichung

$\sigma = 0{,}8027mm$.

Daraus ergibt sich der fehlerbehaftete Mittelwert des Radius mit 

$r = 33{,}1(\pm0{,}8)mm$, $\frac{\Delta r}{r} = 0{,}0242$

Da der Garantiefehler des Messschiebers mehr als eine Größenordnung kleiner ist
als der zufällige Fehler kann dieser vernachlässigt werden.

### Einsetzen in Zielgleichung

Exemplarisch wird der 1. Datensatz aus **Tabelle 1** genommen.

Berechnung der Flussdichte:

$$ B = \mu_0 \left (\frac{4}{5} \right) ^ \frac{3}{2} \cdot \frac{NI}{R} $$ 
$$ B = 4\pi\cdot10^{-7} \frac{Vs}{A\,m} \cdot \left (\frac{4}{5} \right) ^ \frac{3}{2} \cdot \frac{130 \cdot 1{,}85A}{0{,}15m} $$ 
$$ B = 4\pi\cdot10^{-7} \frac{kg\,\cancel{m^2}\,\cancel{s}}{A\,\cancel{A}\,\cancel{m}\,s^{\cancel{3}{\,2}}} \cdot \left (\frac{4}{5} \right) ^ \frac{3}{2} \cdot \frac{130 \cdot 1{,}85\cancel{A}}{0{,}15\cancel{m}} $$
$$ B = 1{,}4417 \cdot 10^{-3} \frac{kg}{A\,s^2} = 1{,}4417 \cdot 10^{-3} \, T$$

Berechnung der spezifischen Ladung:

$$ \frac{e}{m} = \frac{2 \, U}{r^2\cdot B^2}  $$
$$ \frac{e}{m} = \frac{2 \cdot 510V}{\left(0{,}05917m\right)^2\cdot \left(1{,}4417 \cdot 10^{-3} \frac{kg}{A\,s^2}\right)^2} $$
$$ \frac{e}{m} = \frac{2 \cdot 510\,\cancel{kg}\,\cancel{m^2} \, A^{\cancel{2}} \, s^{\cancel{4}}}{0{,}05917^2\,\cancel{m^2}\cdot \left(1{,}4417 \cdot 10^{-3}\right)^2 \,kg^{\cancel{2}}\,\cancel{A}\,\cancel{s^3}} $$
$$ \frac{e}{m} = 1{,}401675 \cdot 10^{11} \frac{A\,s}{kg} = 1{,}401675 \cdot 10^{11} \frac{C}{kg}$$

### Bestimmung des Größtfehlers

Nach der Taylorreihe ergibt sich folgende Formel für den Größtfehler:

$$\frac{\Delta\frac{e}{m}}{\frac{e}{m}} = \left\lvert \frac{\Delta U}{U}\right\rvert + \left\lvert 2 \, \frac{\Delta r}{r}\right\rvert + \left\lvert 2\,\frac{\Delta B}{B}\right\rvert$$

Da $B \sim I$ ergibt sich

$$\frac{\Delta\frac{e}{m}}{\frac{e}{m}} = \left\lvert \frac{\Delta U}{U}\right\rvert + \left\lvert 2 \, \frac{\Delta r}{r}\right\rvert + \left\lvert 2\,\frac{\Delta I}{I}\right\rvert$$

Einsetzen ergibt

$$\frac{\Delta\frac{e}{m}}{\frac{e}{m}} = \left\lvert 0{,}05\right\rvert + \left\lvert 2 \cdot 0{,}05\right\rvert + \left\lvert 2 \cdot 0{,}0242\right\rvert$$
$$\frac{\Delta\frac{e}{m}}{\frac{e}{m}} = 0{,}1984$$

Somit lässt sich der absolute Fehler mit

$$\Delta\frac{e}{m} = 0{,}1984 \cdot 1{,}4351 \cdot 10^{11} \frac{C}{kg}$$
$$= 0{,}28472 \cdot 10^{11} \frac{C}{kg}$$

bestimmen. Das Endergebnis für die spezifische Ladung des Elektron lautet somit

$$\underline{\underline{\frac{e}{m} = 1{,}44(\pm 0{,}29) \cdot 10^{11} \frac{C}{kg}}}$$

# Fazit

Abschließend lässt sich sagen, dass die spezifische Ladung des Elektrons in guter
Näherung bestimmt werden konnte. Der prozentuale Fehler zu den Wert in der Literatur
berägt rund 20%.  
Trotzdem liegt der tatsächliche Wert mit 
$\frac{e}{m} = 1{,}758\,820\,010\,76\,\cdot\,10^{11}\,\mathrm{\frac{C}{kg}}$ 
knapp nicht innerhalb des ermittelten Bereriches
von $1{,}44(\pm 0{,}29) \cdot 10^{11} \frac{C}{kg}$, was darauf hindeutet, dass
es bei diesen Versuch einen erheblichen systematischen Fehler gibt.
Es lässt sich vermuten, dass dieser systematische Fehler mindestens von den
nachfolgenden Sachverhalten beeinflusst wird: Erstens war aufgrund des nicht
funktionsfähigen Wehneltzylinders der Strahl nicht wohl definiert, was 
wahrscheinlich zu einen systematisch falsch abgelesenen Radius geführt hat.
Außerdem scheint es so, dass die Wölbung der Glasoberfläche der Fadenstrahlröhre
vor allem bei Messwerten am Rande der Röhre eine weitere systematische Verfälschung
bewirkt hat. Ob das Ermagnetfeld mit $B \sim 44\mu T$ bei einen erzeugten
Magnetfeld von $\sim 1mT$ eine signifikante Rolle gespielt hat ist fraglich,
weil die dadurch zu erwartende Abweichung viel geringer ist als die aufgetretene.


[^1]: https://de.wikipedia.org/wiki/Fadenstrahlrohr
[^2]: Siehe Betriebsanleitung der Versuchsanordnung
[^3]: https://www.leifiphysik.de/sites/default/files/h5p/content/187/images/file-5b39e87c92a56.png
[^4]: https://de.wikipedia.org/wiki/Spezifische_Ladung
[^5]: Siehe Versuchsanleitung V5

