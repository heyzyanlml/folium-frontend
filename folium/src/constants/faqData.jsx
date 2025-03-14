const faqData = [
  {
    id: 1,
    number: "01.",
    title:
      "¿Qué plantas son ideales para principiantes que suelen olvidar regar?",
    description: `<p  className={styles.AccordionSection__Accordion}>¡No te preocupes! <br/> Todos hemos estado ahí: compramos una planta con grandes intenciones de cuidarla, pero entre el ajetreo diario, se nos olvida regar. La buena noticia es que hay plantas súper resistentes que se llevan muy bien con los olvidos ocasionales de riego.  
  Aquí van algunas de las mejores opciones para principiantes:</p>

  <ul className={styles.AccordionSection__Accordion_list}>
  <br>
  <li>🌱 <strong>Sanfelias (Sansevieria)</strong>: También conocida como 'lengua de suegra', es casi indestructible. Acepta poca agua, luz baja y puede sobrevivir a descuidos prolongados, ¡perfecta para quienes tienen memoria selectiva!   </li>

   <li>🌱 <strong>Cactus</strong>: Estos pequeños guardianes del desierto se adaptan a vivir con poca agua. De hecho, ¡les encanta la sequedad! Solo necesitarás regarlos una vez cada dos semanas (o menos, dependiendo del calor).   </li>

   <li>🌱 <strong>Aloe Vera</strong>: Además de ser una planta resistente, tiene la ventaja de que sus hojas suculentas almacenan agua. Un par de riegos semanales son más que suficientes, ¡y hasta te ayudará con las quemaduras solares!   </li>

   <li>🌱 <strong>Pothos (Epipremnum aureum)</strong>: Esta planta trepadora es muy tolerante a la falta de agua. Puedes dejarla por varios días (o semanas) sin que se ponga triste, además de que le encanta colgar y aportar un toque fresco a cualquier espacio. </li></ul>`,
  },
  {
    id: 2,
    number: "02.",
    title: "¿Por qué mi planta tiene hojas caídas?",
    description: `<p ¡No te preocupes, es normal! Las hojas caídas pueden ser señal de varias cosas, pero generalmente tiene solución. Aquí te dejamos los motivos más comunes:</p>

  <ul>
  <br>
  <li>🔸 <strong>Demasiado o poco riego</strong>: Si las hojas están blandas y marchitas, puede ser exceso de agua. Si están secas y crujientes, probablemente necesite más. ¡Encuentra el balance!</li>

  <li>🔸 <strong>Cambio de temperatura</strong>: Si la planta ha sido movida a un lugar con temperatura muy diferente, puede estar estresada. Busca un lugar más estable.</li>

 <li> 🔸 <strong>Falta de luz</strong>: Si la planta está en un lugar muy oscuro, ¡puede estar pidiendo más luz! Múvela a un lugar más brillante, pero sin sol directo si no le gusta.</li>

  <li>🔸 <strong>Demasiado sol</strong>: Si el sol es muy fuerte, puede quemar las hojas. ¡No todas las plantas son fans del sol directo!</li>

  <li>🔸 <strong>Plagas o enfermedades</strong>: Revisa si hay bichitos o manchas raras. ¡Un buen chequeo puede salvarla!</li></ul>
  <br>
  Con un poco de cuidado y atención, ¡tu planta se recuperará rápidamente! 🌱`,
  },
  {
    id: 3,
    number: "03.",
    title: "¿Es malo mover mis plantas de lugar constantemente?",
    description: `<p>¡Entendemos que quieras experimentar con la decoración de tu hogar, pero mover tus plantas demasiado seguido puede estresarlas! 🌿 Las plantas, al igual que nosotros, prefieren un ambiente estable y predecible. Aquí te contamos por qué:</p>
  <br>
  <ul>
  <li>🔸 <strong>Cambio de luz</strong>: Las plantas se adaptan a la cantidad y tipo de luz de su lugar, así que si las mueves de sitio, podrían estar recibiendo más (¡o menos!) luz de la que necesitan. Este cambio puede hacer que sus hojas se pongan amarillas o que no crezcan como deberían.</li>

    <li>🔸 <strong>Estrés por el movimiento</strong>: Las plantas tienen sus raíces bastante establecidas en el lugar donde están, y moverlas de repente puede alterarlas. Este "estrés de mudanza" puede hacer que sus hojas se caigan o que se ralentice su crecimiento.</li>

    <li>🔸 <strong>¿Les gusta el cambio?</strong>: Algunas plantas no se sienten tan cómodas con los cambios constantes. Por ejemplo, las plantas de interior como las suculentas y las orquídeas prefieren una ubicación fija donde puedan prosperar. ¡Menos es más!</li></ul>
  <br>
  <p>Entonces, ¿cuándo está bien moverlas? Si notas que no están recibiendo suficiente luz o si el lugar donde están se vuelve demasiado caluroso o frío, moverlas a un lugar más adecuado es una buena idea. Pero, en general, ¡dale a tu planta un hogar estable y verás cómo te lo agradece!</p>`,
  },
  {
    id: 4,
    number: "04.",
    title: "¿Cómo evito ahogar a mi planta con agua?",
    description: `<p>¡Las plantas son como nosotros, no les gusta sentirse "empapadas"!  <br>🌱 Si te preocupa que puedas estar regando demasiado, no te preocupes, ¡aquí estamos para ayudarte a encontrar el balance perfecto!💧</p>
  <br>
  <strong>1. Revisa la tierra antes de regar</strong>  
  La regla de oro es: ¡si la tierra aún está húmeda, no riegues! Si metes un dedo en la tierra y aún está mojada a unos centímetros de profundidad, tu planta está bien por ahora. ¡Asegúrate de que realmente necesite agua antes de hacerlo!
 <br>
  <strong>2. Usa una maceta con drenaje</strong>  
  Asegúrate de que tu maceta tenga agujeros en el fondo para que el agua pueda escapar. Si no tiene drenaje, el agua se quedará atrapada en la tierra y eso puede pudrir las raíces. ¡A tus raíces no les gusta nadar!
 <br>
  <strong>3. Riega con moderación</strong>  
  ¡Nada de baños de agua! Es mejor regar poco a poco, asegurándote de que el agua se distribuya bien en la tierra. Deja que el agua drene y si ves que se acumula en el fondo de la maceta, ¡desecha el exceso! ¡Tus plantas preferirán un trago suave!
 <br>
  <strong>4. Conoce a tu planta</strong>  
  Cada planta tiene sus propias necesidades. Algunas, como los cactus, no requieren mucho riego, mientras que otras, como las plantas de interior, prefieren un ambiente ligeramente húmedo. Investiga un poco sobre tu planta y ajusta la cantidad de agua a sus necesidades.
 <br>
  <strong>5. Evita el exceso de riego en invierno</strong>  
  Durante los meses fríos, las plantas crecen más despacio y no necesitan tanta agua. ¡Recuerda que en invierno, menos es más!
  <br>
  ¡Con estos consejos, tu planta estará feliz y saludable, sin riesgo de ahogarse! 🌿 Si alguna vez dudas, recuerda que es mejor quedarse corto con el agua que excederse. ¡Tus plantas te lo agradecerán! 💧`,
  },
  {
    id: 5,
    number: "05.",
    title: "¿Cuándo debo cambiarle la tierra a mi planta?",
    description: `<p>¡Cambiarle la tierra a tu planta no es solo una excusa para jugar a ser jardinero, es parte de su cuidado! 🌱 Aquí te dejamos algunas señales que te indican que es hora de darle un “lavado de cara” a tu planta con tierra fresca:</p>
  <br>
  <strong>🔸 Raíces fuera de control</strong>  
  Si notas que las raíces están saliendo por los agujeros de drenaje de la maceta o están apretadas en el fondo, ¡es hora de un cambio de tierra! Las raíces necesitan espacio para crecer y expandirse, y si están demasiado apretadas, tu planta no podrá desarrollarse bien.
 <br>
  <strong>🔸 La tierra ya no drena bien</strong>  
  Si el agua se queda estancada en la maceta después de regar, es probable que la tierra esté compactada. La tierra debe drenar bien para que las raíces puedan respirar, así que si esto no está sucediendo, ¡es hora de cambiar!
 <br>
  <strong>🔸 Tu planta parece estar “atrapada”</strong>  
  Si tu planta ha dejado de crecer o tiene hojas amarillas a pesar de estar bien cuidada, puede ser señal de que la tierra ya no tiene los nutrientes que necesita. Cambiar la tierra puede darle un empujón para que vuelva a crecer fuerte y saludable.
 <br>
  <strong>🔸 Cada 1 o 2 años</strong>  
  Si tu planta es de interior, una vez al año o cada dos años es una buena frecuencia para cambiarle la tierra. Las plantas más grandes o las que han estado mucho tiempo en la misma maceta podrían necesitarlo con más frecuencia.
 <br>
  <strong>🔸 Cambio de temporada</strong>  
  Algunos jardineros prefieren hacer el cambio de tierra al principio de la primavera, cuando las plantas empiezan a crecer de nuevo. ¡Es como un “renovarse o morir” para ellas!
  <br>
   <br>
  <strong>🌱 ¿Cómo hacerlo? 🌱</strong>  
  <p>Cuando cambies la tierra, no olvides elegir una maceta solo un poco más grande que la anterior y asegúrate de usar una tierra de buena calidad. ¡Y no te olvides de darle a tu planta un poco de agua fresca después de su “nuevo look”!  </p>
  <br>
    <p>Con estos consejos, ¡tu planta estará lista para un nuevo capítulo con tierra fresca y renovada!  <br>🌿 Si la cuidas bien, seguro te lo agradecerá con un montón de hojas verdes. 😊  </p>`,
  },
  {
    id: 6,
    number: "06.",
    title: "¿Cáscaras de huevo, café o composta realmente ayudan o es mito?",
    description: `<p>Sí ayudan, pero no hacen milagros. 🌿
  <br>
   <br>
  <strong>✅ Cáscaras de huevo:</strong> Aportan calcio, pero tardan en descomponerse. Tritúralas bien.

  <strong>✅ Café usado:</strong> Enriquece la tierra, pero en exceso puede apelmazarla. No lo uses fresco.

  <strong>✅ Composta:</strong> Lo mejor para la tierra, pero necesita tiempo para descomponerse.
 <br>
  <br>
  <strong>❌ Mitos:</strong> No son fertilizantes instantáneos ni funcionan para todas las plantas. ¡Úsalos con equilibrio y paciencia! 🌱</p>`,
  },
  {
    id: 7,
    number: "07.",
    title: "¿Cómo identifico qué tipo de plaga tiene mi planta?",
    description: `<p>Si tu planta tiene visitantes no deseados, es hora de detectivear. 🔍🌿
 <br>
  <br>
<strong>🕷️ Arañitas y telarañas:</strong> Probablemente ácaros. Mira debajo de las hojas.
 <br>
<strong>🦟 Mosquitas pequeñas volando:</strong> Posibles mosquitos del sustrato. Se crían en tierra húmeda.
 <br>
<strong>🐞 Bichos blancos y algodonosos:</strong> Cochinilla algodonosa, parecen bolitas de algodón.
 <br>
<strong>🐜 Hojas pegajosas y deformes:</strong> Puede ser pulgón, les encanta chupar la savia.
 <br>
<strong>🐛 Agujeros en las hojas:</strong> Probablemente orugas o escarabajos.
 <br>
  <br>
Revisa bien tu planta y actúa rápido. ¡Tu jungla te lo agradecerá! 🌱</p>`,
  },
  {
    id: 8,
    number: "08.",
    title: "¿Hay un momento del día ideal para regar mi planta?",
    description: `<p>¡Sí! Y tu planta lo agradecerá. 🌿💦
 <br>
  <br>
<strong>⏰ Mejor momento:</strong> Temprano en la mañana o al atardecer. Así la tierra absorbe bien el agua sin que el sol la evapore demasiado rápido.
 <br>
  <br>
<strong>⚠️ Peor momento:</strong> Al mediodía con el sol a tope. El agua se evapora rápido y algunas gotas pueden hacer “efecto lupa” y quemar las hojas. 😱
 <br>
  <br>
Si olvidas regar en la mañana, mejor espera a la tarde. ¡Tu planta te lo agradecerá con hojas felices! 🌱✨
 <br>
  <br>
¿Quieres saber qué horario es mejor para <strong>TU</strong> planta en específico?  <br>Búscalo en nuestro <strong>Buscador de Plantas</strong> y encuentra la mejor rutina para su cuidado. 🔍🌿</p>`,
  },

  // Just in case I wanted to add another FAQ
  //   {
  //     id: ,
  //     number: "",
  //     title: "",
  //     description: <></>,
  //   },
];

export default faqData;
