let userChoice = prompt('Uzay gemisi "Nebula" ile bilinmeyen bir galakside seyahat ediyorsun. Gemideki sistemler aniden alarm vermeye başlıyor ve ışıklar yanıp sönmeye başlıyor. Karşılaştığın bu durum, bir şeylerin ters gittiğini gösteriyor.\nSoru 1: Ne yaparsın?\na) Paneli kontrol etmeye çalışırım.\nb) Dışarıyı izlerim.\nCevap olarak a veya b yazmalısınız.')

if (userChoice === "a") { // 1. SORU A SEÇENEĞİ

  let secondChoice = prompt('1A SEÇİMİ - Paneli kontrol etmek:\nPaneldeki alarm, geminin yörüngesinden saptığını gösteriyor. Rotanın bilinmeyen bir gezegene yönlendirildiğini fark ediyorsun. Gemi içindeki otomatik sistemler yavaş yavaş kapanıyor.\nSoru 2: Ne yaparsın?\na) Rotayı geri döndürmeye çalışırım.\nb) Bilinmeyen gezegene iniş için hazırlık yaparım.')

  if (secondChoice === "a") { //2. SECİMİN A SEÇENEĞİ

    let thirdChoice = prompt('2A SEÇİMİ - Rotayı geri döndürmek:\nRotayı geri döndürmek için paneldeki manuel kontrolleri devreye sokuyorsun. Ancak sistem kilitlenmiş gibi görünüyor. Aniden gemideki ışıklar kararıyor ve bir arıza sesi duyuluyor. Artık rotayı değiştiremiyorsun.\nSoru 3: Ne yaparsın?\na) Gemiye manuel müdahale etmek için motor dairesine iniyorum.\nb) Acil iniş için hazırlıklara başlarım.')

    if (thirdChoice === "a") { // 3. SEÇİMİN A SEÇENEĞİ
      let fourthChoice = prompt('3A SEÇİMİ - Motor dairesine inmek:\nMotor dairesine indiğinde, bir enerji çarpması yaşanıyor ve hafif bir şok geçiriyorsun. Gemi içinde garip bir enerji yoğunluğu hissediyorsun. Enerji sistemi karmaşık ve tanıdık olmayan bir yapıda.\nSoru 4: Enerji sistemini nasıl çözersin?\na) Manuel devreleri kesmeye çalışırım\nb) Sistemi analiz edip bir plan yaparım.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Manuel devreleri kesmeye çalışmak:\nSistemi manuel olarak devre dışı bırakmayı deniyorsun. Ellerin titrerken, panellerin karardığını ve geminin enerji çekişinin azaldığını hissediyorsun. Kara delik hala seni içine çekiyor, ama zaman kazanmış gibisin. Şimdi ne yapacağına karar vermelisin.\nSoru 5: Ne yaparsın?\na) Geri kalan enerjiyi bir kaçış rotası için kullanırım.\nb) Kara deliğin çekim gücünden yararlanarak bir zıplama yapmayı denerim.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Geri kalan enerjiyi bir kaçış rotası için kullanmak:\nGemiye kalan tüm enerjiyi bir kaçış rotasına yönlendirmeye karar veriyorsun. Son bir umutla motorlar tekrar çalışıyor ve kara delikten uzaklaşmaya başlıyorsun. Çekim gücünü zorlukla kırıyorsun, ama gemi ciddi hasar alıyor ve neredeyse işlevsiz hale geliyor. Neyse ki yakınlardaki bir gezegene doğru yön alıyorsun.\nSon: Kaçışın başarılı oluyor, ama artık bozuk bir gemiyle yabancı bir gezegende tek başınasın. Burada yeni bir hayat kurman gerekecek.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Kara deliğin çekim gücünden yararlanarak bir zıplama yapmayı denemek:\nKara deliğin çekim gücünü hesaba katıp, bir zaman/uzay zıplaması yapmayı deniyorsun. Hassas hesaplamalar sonucunda, gemi devasa bir enerji dalgasına kapılarak zıplıyor. Bir anda kendini farklı bir galakside, tamamen bilinmeyen bir bölgede buluyorsun.\nSon: Zamanda ve uzayda atlayış yaparak bilinmeyen bir galaksiye varıyorsun. Burada seni bekleyen fırsatlar ve tehlikeler ne olacak, artık her şey senin elinde.')
        }
      }
      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Sistemi analiz etmek:\nSistemi analiz ettiğinde, gemideki enerji kaynağının bir tür uzaylı teknolojisi olduğunu fark ediyorsun. Bu teknoloji seni ve gemiyi, başka bir boyuta çekmeye başlıyor.\nSoru 5: Ne yaparsın?\na) Boyut geçişine direnirim\nb) Boyut geçişine izin veririm.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Boyut geçişine direnmek:\nBoyut geçişine direnmeye çalışıyorsun, ancak geminin yapısı bozulmaya başlıyor. Enerji patlamasıyla birlikte her şeyin karardığını hissediyorsun.\nSon: Gemi paramparça oldu ve bilinmez bir boyutta kayboldun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Boyut geçişine izin vermek:\nBoyut geçişine izin verdiğinde, kendini bambaşka bir evrende buluyorsun. Etrafında sonsuz boşluklar ve garip enerjiler var. Yeni bir dünyaya adım attın, ama seni bekleyen tehlikeleri bilmiyorsun.\nSon: Bilinmez bir evrenin keşfi seni bekliyor, ama bu yolculuk tehlikeli.')
        }
      }
    }

    else if (thirdChoice === "b") { // 3. SEÇİMİN B SEÇENEĞİ
      let fourthChoice = prompt('3B SEÇİMİ - Acil iniş hazırlıkları:\nİniş için hazırlık yapmaya başlarken, gemideki sistemlerin neredeyse tamamen devre dışı olduğunu fark ediyorsun. Yine de inişi kontrol edebilmek için manevralar yapıyorsun, ama hızla yaklaşan gezegenin atmosferine giriyorsun.\nSoru 4: İnişi nasıl yaparsın?\na) Manuel kontrolü devreye alırım\nb) Otomatik iniş sistemiyle devam ederim.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Manuel kontrolü devreye almak:\nGemiyle manuel kontrol yaparken, yakıtın bittiğini fark ediyorsun. İniş sırasında tüm sistemler kapanıyor.\nSoru 5: Ne yaparsın?\na) Son bir çabayla inişi yaparım.\nb) Kapsülümü kullanırım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Son bir çabayla inişi yapmak:\nSon bir manevra ile iniş yapmayı başarıyorsun. Gemi ağır hasar alıyor, ama sağlam bir şekilde yere inmiş oluyorsun. Ancak dışarıda yaşam belirtileri yok, yalnızsın.\nSon: Hayatta kaldın, ama keşfedilmemiş bir gezegende yalnızsın.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Kapsülümü kullanmak:\nKapsülü aktif hale getiriyorsun ve fırlatıyorsun. Yere sert bir iniş yapıyorsun. Kapsül sağlam kalmış ama gemiden tamamen kopmuş durumdasın. Hayatta kalmak için ne yapacağını planlaman gerek.\nSon: Gemisiz bir şekilde yabancı bir gezegende mahsur kaldın.')
        }
      }

      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Otomatik iniş sistemiyle devam etmek:\nOtomatik iniş sistemine güvenerek kontrolleri ona devrediyorsun. Geminin içi sarsılmaya başlarken, bilgisayar inişi yavaşlatmaya çalışıyor. Ancak atmosferdeki yoğun türbülanslar sistemi zorlayarak gemiyi sert bir şekilde yörüngede döndürmeye başlıyor. Bu noktada sistemin tam kontrolü kaybetmeye başladığını fark ediyorsun.\nSoru 5: Ne yaparsın?\na) Otomatik iniş sistemini devre dışı bırakıp manuel kontrolü devralırım.\nb) Otomatik iniş sisteminin gemiyi indirmesine izin veririm.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Otomatik iniş sistemini devre dışı bırakıp manuel kontrolü devralmak:\nOtomatik sistemin yeterli olmadığını fark edip hızla manuel kontrolü tekrar devralıyorsun. Gemiyi zorlukla stabilize etmeyi başarıyor, ama çok sert bir iniş yapıyorsun. İniş sırasında gemi hasar alıyor ve bir kısmı kullanılamaz hale geliyor, ama hayatta kalmayı başarıyorsun. Etrafına baktığında kendini, tuhaf bitkilerle dolu, düşmanca görünen bir gezegende buluyorsun.\nSon: Gemin kullanılamaz hale geldi ve seni zorlu bir hayatta kalma mücadelesi bekliyor. Tuhaf bir gezegende tek başına yeni bir yaşam kurman gerekecek.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Otomatik iniş sisteminin gemiyi indirmesine izin vermek:\nOtomatik iniş sistemine güvenmeye devam ediyorsun, ancak yoğun atmosferik türbülanslar ve sistemdeki hatalar nedeniyle kontrolü tamamen kaybediyorsun. Gemin hızla düşmeye devam ediyor ve yere çarpıyorsun. Korkunç bir çarpışma sonrası bilincini kaybediyorsun. Uyandığında, gemi parçalanmış durumda ve sen hafif yaralı olarak hayatta kalmışsın, ancak etrafında seni çevreleyen garip bir medeniyetin izlerini fark ediyorsun.\nSon: Sert bir inişin ardından, bir başka gezegenin yerli halkı tarafından yakalanıyorsun. Kaderin artık onların insafına kalmış durumda.')
        }
      }
    }

  } else if (secondChoice === "b") { //2. SECİMİN B SEÇENEĞİ

    let thirdChoice = prompt('2B SEÇİMİ - Bilinmeyen gezegene iniş için hazırlık:\nBilinmeyen gezegene iniş için hazırlıklara başlarken, geminin içindeki enerji dalgalanmalarını izliyorsun. Aniden, bir ses duyuyorsun ve etrafında garip ışıklar belirmeye başlıyor.\nSoru 3: Ne yaparsın?\na) Sesin kaynağını bulmaya çalışırım.\nb) Bilgisayardan iniş rotasını kontrol ederim.')

    if (thirdChoice === "a") { // 3. SEÇİMİN A SEÇENEĞİ
      let fourthChoice = prompt('3A SEÇİMİ - 3A SEÇİMİ - Sesin kaynağını bulmak:\nSesin kaynağına doğru ilerlerken, büyük bir enerji kaynağı buluyorsun. Ancak bu enerji kaynağı oldukça tehlikeli görünüyor.\nSoru 4: Ne yaparsın?\na) Enerji kaynağını incelemek için yaklaşıyorum.\nb) Uzaktan analiz yaparım.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Enerji kaynağını incelemek:\nEnerji kaynağına yaklaştıkça, yoğun bir ışık patlaması yaşıyorsun. Kendini bilinmeyen bir boyutta buluyorsun.\nSoru 5: Ne yaparsın?\na) Bu boyutta var olmaya çalışırım.\nb) Geçişi geri döndürmeye çalışırım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Bu boyutta var olmaya çalışmak:\nYeni boyutta hayatta kalmaya çalışıyorsun. Ancak her şey daha da karmaşıklaşıyor.\nSon: Yenilikçi bir evrende kaybolmuş bir şekilde hayatta kalmaya çalışıyorsun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Geçişi geri döndürmeye çalışmak:\nGeçişi geri döndürmeye çalışırken, enerjinin seni daha da derin boyutlara çektiğini hissediyorsun.\nSon: Enerji kaynağının etkisi altında sonsuz bir boşlukta kayboluyorsun.')
        }
      }
      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Uzaktan analiz yapmak:\nUzaktan yaptığın analiz sonucunda, enerji kaynağının doğrudan temas etmenin çok tehlikeli olabileceğini fark ediyorsun. Fakat aynı zamanda bu kaynağın büyük bir güce sahip olduğunu ve ona erişmenin sana avantaj sağlayabileceğini de düşünüyorsun.\nSoru 5: Ne yaparsın?\na) Enerji kaynağını bir cihazla güvenli bir şekilde izole etmeye çalışırım.\nb) Enerji kaynağıyla hiç temas etmeyip oradan uzaklaşırım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Enerji kaynağını bir cihazla güvenli bir şekilde izole etmeye çalışmak:\nCihazınla enerji kaynağını izole etmeye çalışırken büyük bir enerji patlaması gerçekleşir. Ancak şanslısın ki cihazın yeterince güçlüdür ve seni korur. Patlamanın ardından, enerji kaynağı yok olur ve artık tehlikeli değildir. Bu başarı sayesinde, elde ettiğin cihazın yardımıyla gelecekte karşılaşacağın zorlukları daha kolay çözme şansın olur. Yolculuğun devam eder, ama artık çok daha güçlü bir teknolojik avantajın var!\nSon: Teknolojik bir zaferle sona erdi.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Enerji kaynağıyla hiç temas etmeyip oradan uzaklaşmak:\nEnerji kaynağı tehlikeli görünse de oradan uzaklaşma kararın seni daha büyük bir beladan kurtarır. Yolda karşılaştığın diğer maceralarda, enerji kaynağıyla uğraşmadığın için daha hızlı ve güvenli hareket edersin. Kendine ve sezgilerine olan güvenin artar. Her ne kadar bu enerji kaynağını araştırmak seni güçlü kılabilecek olsa da, hayatta kalma içgüdün sayesinde yeni tehlikelere karşı hazırlıklı olursun.\nSon: Akıllıca bir geri çekilme sayesinde yolculuğa güvenle devam ettin.')
        }
      }
    }

    else if (thirdChoice === "b") { // 3. SEÇİMİN B SEÇENEĞİ
      let fourthChoice = prompt('3B SEÇİMİ - Bilgisayardan iniş rotasını kontrol etmek:\nİniş rotasını kontrol ederken, geminin otomatik sistemlerinin zarar gördüğünü anlıyorsun. Bilgisayar, bilinmeyen bir gezegenin yüzeyine yaklaşmanın tehlikeli olduğunu belirtiyor.\nSoru 4: İnişi nasıl yaparsın?\na) Kontrolleri düzeltmek için uğraşırım.\nb) Acil iniş için hazırlıklara başlarım.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Kontrolleri düzeltmek:\nKontrolleri düzeltmeye çalışırken, gemide başka bir arıza meydana geliyor. Gemi, bilinmeyen bir gezegenin yüzeyine hızla düşüyor.\nSoru 5: Ne yaparsın?\na) Otomatik iniş sistemini aktif ederim.\nb) Manuel olarak inişi yaparım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Otomatik iniş sistemini aktif etmek:\nOtomatik iniş sistemi devrede ama arızalı. Gemi sert bir iniş yapıyor ve ağır hasar alıyor.\nGemide hayatta kalmayı başardın, ama yaşamak için yardıma ihtiyacın var.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Manuel olarak inişi yapmak:\nManuel olarak inişi yapmaya çalışıyorsun ama gemi kontrol dışı bir şekilde düşüyor. Son bir manevrayla kendini kurtarmaya çalışıyorsun.\nSon: Düşüş sırasında gemi paramparça oluyor ve sen kayboluyorsun.')
        }
      }

      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Acil iniş için hazırlıklara başlamak:\nAcil iniş hazırlıklarını yaparken, geminin iniş yeri hakkında daha fazla bilgi topluyorsun. Gezegenin yüzeyi engebeli ve inişin riskli olabileceğini görüyorsun. Aynı zamanda geminin enerjisi sınırlı ve bu iniş sırasında çok dikkatli olman gerekiyor.\nSoru 5: Ne yaparsın?\na) Enerji tasarrufu yaparak en güvenli iniş noktasını bulmaya çalışırım.\nb) Hızlı bir iniş yaparak acil inişi tamamlarım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Enerji tasarrufu yaparak en güvenli iniş noktasını bulmaya çalışmak:\nEnerjiyi dikkatlice kullanarak gezegenin yüzeyinde daha düz ve güvenli bir iniş noktası buluyorsun. Gemin çok fazla hasar almadan yere iniyor ve sen, gemideki sınırlı kaynaklarla kendini idare edebilecek bir konumdasın. Bu bilinmeyen gezegende uzun süre hayatta kalabilmek için keşfe çıkman gerekiyor, ama en azından güvenli bir iniş yapmayı başardın.\nSon: Başarılı bir iniş yaptın ve yeni dünyayı keşfetmeye hazırsın.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Hızlı bir iniş yaparak acil inişi tamamlamak:\nAcil inişi hızlıca gerçekleştiriyorsun, ancak bu hızlı iniş sırasında gemin ciddi hasar alıyor. Yüzeye sert bir şekilde çarpıyorsun ve gemi artık kullanılamaz hale geliyor. Neyse ki, sen hayattasın ve birkaç temel yaşam kaynağın var. Ancak bu zor gezegende uzun süre hayatta kalabilmek için çok çaba harcaman gerekecek. Kaynakların sınırlı, bu yüzden hayatta kalma savaşı seni bekliyor.\nSon: Sert bir iniş sonrası hayatta kaldın, ancak kaynakların çok sınırlı. Zor bir yolculuk seni bekliyor.')
        }
      }
    }

  }

} else if (userChoice === "b") { // 1. SORU B SEÇENEĞİ

  let secondChoice = prompt('1B SEÇİMİ - Dışarıyı izlemek:\nGeminin etrafında bilinmeyen bir ışık süzülüyor. Dışarıya bakınca, uzayda hızla ilerleyen devasa bir kara delik olduğunu fark ediyorsun. Kara delik, gemiyi yavaş yavaş içine çekiyor.\nSoru 2: Ne yaparsın?\na) Gemiyi harekete geçirip uzaklaşmaya çalışırım.\nb) Kara deliğin etkisini incelemeye çalışırım.')

  if (secondChoice === "a") { //2. SECİMİN A SEÇENEĞİ

    let thirdChoice = prompt('2A SEÇİMİ - Gemiyi harekete geçirmek:\nGemiyi hareket ettirmeye çalışıyorsun ama sistemler neredeyse tamamen devre dışı kalmış. Kara delik hızla yaklaşırken, gemi yavaşça çekiliyor.\nSoru 3: Ne yaparsın?\na) Acil durum modunu açarım.\nb) Kapsülü kullanmaya karar veririm.')

    if (thirdChoice === "a") { // 3. SEÇİMİN A SEÇENEĞİ
      let fourthChoice = prompt('3A SEÇİMİ - Acil durum modunu açmak:\nAcil durum modunu açtığında, geminin bazı sistemleri geri geliyor ama hala yetersiz. Kara delikten kaçmak için yeterli zamanın kalmadığını hissediyorsun.\nSoru 4: Ne yaparsın?\na) Kapsülü kullanırım.\nb) Gemiyi son bir kez denemeye çalışırım.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Kapsülü kullanmak:\nKapsülü aktif hale getirip fırlatıyorsun. Uzaya doğru hızla çıkıyorsun ve kara deliğin etkisinden kurtuluyorsun.\nSoru 5: Ne yaparsın?\na) Yakınlardaki bir gezegene iniş yaparım.\nb) Uzaya doğru yol almaya devam ederim.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Yakınlardaki bir gezegene iniş yapmak:\nYakınlardaki gezegene iniş yapıyorsun. Yeni bir hayat kurmak için mücadele etmen gerekecek.\nSon: Bilinmeyen bir gezegende yeni bir başlangıç yapıyorsun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Uzaya doğru devam ettiğinde, hiç beklemediğin bir şeyle karşılaşıyorsun: bir uzay istasyonu. Orada insanlarla karşılaşma şansın var.\nSon: Uzayda yeni dostluklar ve keşifler seni bekliyor.')
        }
      }
      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Gemiyi son bir kez denemek:\n Geminin sistemlerini düzeltmeye çalışırken, kara deliğe daha da yaklaşıyorsun. Ama bir umudun var; belki de her şeyi düzeltip kurtulabilirsin. Fakat çabaların sonuç vermiyor. Son bir hamle yapmalısın.\nSoru 5: Ne yaparsın?\na) Acil manevra yapıp hızla kaçmaya çalışırım.\nb) Sistemleri yeniden başlatmayı denerim.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Acil manevra yapıp hızla kaçmaya çalışmak:\nSon bir deneme ile gemiyi kontrol altına alıyorsun. Hızla yön değiştirip kara delikten kurtuluyorsun, ama gemi ağır hasar alıyor.\nSon: Tehlikeyi atlattın, ama gemin onarıma ihtiyaç duyuyor. Hayatta kalmak için yeni bir yolculuğa çıkmalısın.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Sistemleri yeniden başlatmayı denemek:\nSistemleri yeniden başlatmak için son bir umutla düğmelere basıyorsun. Ama zamanın kalmadığını hissediyorsun ve gemi kara deliğe düşüyor.\nSon: Kara deliğin içine düşerken, evrenin sırlarıyla yüzleşmek için cesur bir yolculuğa çıkıyorsun.')
        }
      }
    }

    else if (thirdChoice === "b") { // 3. SEÇİMİN B SEÇENEĞİ
      let fourthChoice = prompt('3B SEÇİMİ - Kapsülü kullanmaya karar vermek:\nGeminin sistemleri devre dışı kalmışken, tek kurtuluşun kapsül olduğunu düşünüyorsun. Kapsül, daha az enerji gerektiriyor ve daha az hasar almış durumda. Hızla kapsüle geçiyor, güvenlik sistemlerini devreye alıyorsun. Kapsül, gemiden uzaklaşmak üzere tasarlanmış. Ancak daha kapsül kapaklarını kapatmadan geminin alarmı çalmaya başlıyor; kara delik çok yakın.\nSoru 4: Ne yaparsın?\na) Hızla kapsülün kapaklarını kapatıp fırlatırım.\nb) Son bir kez geminin kontrol sistemine erişmeye çalışırım.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Hızla kapsülün kapaklarını kapatıp fırlatmak:\nKapakları hızla kapatıyorsun ve fırlatma butonuna basıyorsun. Kapsül hızla gemiden ayrılıyor, ama arkanızda dev bir kara delik açılıyor ve her şeyi yutmaya başlıyor. Kapsül, kara deliğin etrafındaki bir enerji dalgasına kapılıyor.\nSoru 5: Ne yaparsın?\na) Enerji dalgasını kontrol etmeye çalışırım.\nb) Kapsülün sistemlerini sıfırlayıp güvenli bir yörüngeye geçmeyi denerim.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Enerji dalgasını kontrol etmeye çalışmak:\nEnerji dalgası seni sarmalarken, bilimsel içgüdülerini kullanıyorsun. Sıfırdan bir analiz yapıp dalganın yönünü kontrol etmeye çalışıyorsun. Bir anda dalganın içindeki enerjiyi kendi yararına çevirmeyi başarıyorsun. Artık kontrol senin elinde.\nSon: Enerji dalgasının içinden çıkarak yeni bir boyuta geçiyorsun. Burası tamamen farklı bir gerçeklik ve burada yeni bir macera seni bekliyor.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Kapsülün sistemlerini sıfırlayıp güvenli bir yörüngeye geçmeyi denemek:\nKapsülün sistemlerini sıfırlıyorsun ama zamanın kısıtlı olduğunu biliyorsun. Her şey sarsılırken, güvenli bir yörüngeye geçmeyi başarıyorsun. Ancak kara deliğin etkisi seni peşinden takip ediyor. Geçtiğin yörünge, seni uzak bir gezegene gönderiyor.\nSon: Kapsülün sistemlerini sıfırlıyorsun ama zamanın kısıtlı olduğunu biliyorsun. Her şey sarsılırken, güvenli bir yörüngeye geçmeyi başarıyorsun. Ancak kara deliğin etkisi seni peşinden takip ediyor. Geçtiğin yörünge, seni uzak bir gezegene gönderiyor.')
        }
      }

      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Kapsülün kontrol sistemine müdahale etmek:\nKapsülün kontrol sistemine müdahale etmeye karar veriyorsun. Ancak sistemler kararsız ve bir hata mesajı alıyorsun. Kara deliğin etkisi giderek artarken, içinde bulunduğun durumun ne kadar kritik olduğunu anlıyorsun. Kapsül, birkaç saniye içinde devre dışı kalacak.\nSoru 5: Ne yaparsın?\na) Acil durum modunu aktive ederek sistemleri sıfırlamaya çalışırım.\nb) Kapsülü fırlatmak için son bir deneme yaparım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Acil durum modunu aktive ederek sistemleri sıfırlamaya çalışmak:\nAcil durum modunu aktif hale getiriyorsun ama sistem hala yanıt vermiyor. Kara deliğin çekimi arttıkça, kapsül bir o yana bir bu yana savruluyor. Son bir umutla, enerji dalgasının yönünü değiştirmeye çalışıyorsun. Ancak zamanın kalmadığını hissediyorsun.\nSon: Kapsül, kara deliğe doğru hızla çekiliyor ve hiçbir şey yapamadan içine giriyorsun. Bir anlık bilinç kaybı yaşıyorsun ama sonra kendini tamamen farklı bir gerçeklikte buluyorsun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Kapsülü fırlatmak için son bir deneme yapmak:\nKapsülü fırlatmak için son bir deneme yapıyorsun ama zaman kalmadı. Fırlatma butonuna basıyorsun ve kapsül aniden ayrılıyor. Ancak kara delikten kaçmanın imkansız olduğunu fark ediyorsun.\nSon: Kapsülün içerisine hapsolmuş bir şekilde kara deliğe doğru sürükleniyorsun. Sonunda bilinç kaybı yaşamadan, yok olmaktan başka çaren kalmıyor.')
        }
      }
    }

  } else if (secondChoice === "b") { //2. SECİMİN B SEÇENEĞİ

    let thirdChoice = prompt('2B SEÇİMİ - Kara deliğin etkisini incelemek:\nKara deliğin etkisini incelerken, devasa bir enerji dalgasının seni sarmaladığını hissediyorsun. Bütün sistemler aniden kapanıyor ve bilinmeyen bir boyuta çekiliyorsun.\nSoru 3: Ne yaparsın?\na) Boyut değişimini kabullenirim..\nb) Direnç göstermeye çalışırım.')

    if (thirdChoice === "a") { // 3. SEÇİMİN A SEÇENEĞİ
      let fourthChoice = prompt('3A SEÇİMİ - Boyut değişimini kabullenmek:\nBoyut değişimini kabullenirken, yeni bir evrene geçiyorsun. Burada her şey farklı ve belirsiz.\nSoru 4: Ne yaparsın?\na) Yeni evrende hayatta kalmaya çalışırım.\nb) Dönüş yolunu bulmaya çalışırım.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Yeni evrende hayatta kalmaya çalışmak:\nYeni evrende hayatta kalmaya çalışıyorsun, ama etrafındaki tehlikeler seni zorluyor.\nSoru 5: Ne yaparsın?\na) Diğer varlıklarla iletişime geçmeye çalışırım.\nb) Kendi başıma hayatta kalmaya çalışırım.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Diğer varlıklarla iletişime geçmek:\nDiğer varlıklarla iletişim kurmaya çalışıyorsun ve yeni dostlar edinmeye başlıyorsun.\nSon: Yeni dostlarınla birlikte bilinmeyen bir evrende hayatta kalıyorsun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Kendi başına hayatta kalmaya çalışmak:\nKendi başına hayatta kalmaya çalışırken, her şeyin seni yok etmeye çalıştığını hissediyorsun.\nSon: Kaybolmuş bir ruh olarak bilinmeyen evrende kayboluyorsun.')
        }
      }
      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Dönüş yolunu bulmaya çalışmak:\nDönüş yolunu bulmaya karar veriyorsun. Ancak bu yeni evrende neyin tehlikeli neyin tehlikesiz olduğunu bilmediğin için dikkatli olmalısın. İlk başta bazı nesneleri incelemeye başlıyorsun. Bir ışık kaynağına doğru yöneliyorsun.\nSoru 5: Ne yaparsın?\na) Işığa doğru giderim.\nb) Işıktan uzak dururum.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Işığa doğru gitmek:\nIşığa doğru giderken, bir portalın açıldığını görüyorsun. Gözlerin kamaşırken, içindeki merak seni yönlendiriyor. Ancak bu yolculuğun tehlikeli olabileceğini düşünüyorsun.\nSon: Işığın içine girdiğinde, vücudun birdenbire zayıflıyor ve kayboluyorsun. Dönüş yolunu bulamadan bilinmeyen bir evrende kayboluyorsun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Işıktan uzak durmak:\nIşıktan uzak durmaya karar veriyorsun. Işığın tehlikeli olabileceğini hissediyorsun. Etrafında başka yollar keşfetmeye başlıyorsun ve ilginç nesneler buluyorsun.\nSon: Bu nesneleri kullanarak yeni bir yolculuğa çıkıyorsun. Ancak bu yeni yolda, tehlikelerin de seni beklediğini anlıyorsun.')
        }
      }
    }

    else if (thirdChoice === "b") { // 3. SEÇİMİN B SEÇENEĞİ
      let fourthChoice = prompt('3B SEÇİMİ - Direnç göstermeye çalışmak:\nDirenç göstermeye çalışırken, içsel bir güç buluyorsun ve boyut değişimini atlatmayı başarıyorsun.\nSoru 4: Ne yaparsın?\na) Geri dönmeye çalışırım.\nb) Yeni evrende hayatta kalmayı seçerim.')

      if (fourthChoice === "a") { // 4. SEÇİMİN A SEÇENEĞİ
        let fifthChoice = prompt('4A SEÇİMİ - Geri dönmeye çalışmak:\nGeri dönmek için uğraşırken, yeni evrendeki güçlerin seni daha da zorlamaya başlıyor. Yavaş yavaş kayboluyorsun.\nSoru 5: Ne yaparsın?\na) Savaşmaya devam ederim.\nb) Teslim olurum.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Savaşmaya devam etmek:\nSavaşmaya devam ediyorsun ama her şey seni aşağı çekiyor. Son bir güçle kendini toparlıyorsun ama ne kadar sürecek bu durum?\nSon: Sonsuz bir mücadele içinde kayboluyorsun.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Teslim olmak:\nTeslim olduğunda, belirsizlik içinde kayboluyorsun.\nSon: Kayıp bir ruh olarak yeni bir evrende var olmaya çalışıyorsun.')
        }
      }

      else if (fourthChoice === "b") { // 4. SEÇİMİN B SEÇENEĞİ
        let fifthChoice = prompt('4B SEÇİMİ - Yeni evrende hayatta kalmayı seçmek:\nYeni evrende hayatta kalmaya karar veriyorsun. Bu evrende birçok tehlike seni bekliyor, ama aynı zamanda keşfedilecek fırsatlar da var.\nSoru 5: Ne yaparsın?\na) Etrafımdaki varlıklarla iş birliği yaparım.\nb) Tek başıma yoluma devam ederim.')

        if (fifthChoice === "a") { // 5. SEÇİMİN A SEÇENEĞİ VE SONU
          alert('5A SEÇİMİ - Etrafımdaki varlıklarla iş birliği yapmak:\nBir grup varlıkla iş birliği yaparak birlikte hayatta kalmaya çalışıyorsun. Her birinin farklı yetenekleri var.\nSon: İş birliği sonucunda yeni bir köy kuruyorsunuz ve burada huzur içinde yaşamaya başlıyorsunuz.')
        }

        else if (fifthChoice === "b") { // 5. SEÇİMİN B SEÇENEĞİ VE SONU
          alert('5B SEÇİMİ - Tek başıma yoluma devam etmek:\nTek başına devam etmeye karar veriyorsun. Ancak yalnızlık, seni zayıf düşürüyor ve zor durumda bırakıyor.\nSon: Tek başına gezdiğin bu evrende kayboluyor ve sonun geldiğini hissediyorsun.')
        }
      }
    }

  }

} else {
  alert('Lütfen a ve b harflerinden başka harf, sayı veya sembol girmeyiniz.')
}