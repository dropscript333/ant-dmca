  var dominioDesejado = "bauduuco.com";
  if (window.location.hostname === dominioDesejado) {
    var script_loaded = false;

    function loadJSscripts() {
      if (!script_loaded) {
        observer.disconnect();
        script_loaded = true;

        // Carregar imagens lazy
        document.querySelectorAll("img.lazy").forEach(function(img) {
          var datasrc = img.dataset.src;
          if (datasrc) {
            img.src = datasrc;
            img.classList.remove("lazy");
          }
        });

        // Carregar iframes lazy
        document.querySelectorAll("iframe.lazy").forEach(function(iframe) {
          var datasrc = iframe.dataset.src;
          if (datasrc) {
            iframe.src = datasrc;
            iframe.classList.remove("lazy");
          }
        });

        // Carregar scripts assíncronos
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var datasrc = scripts[i].getAttribute("data-src");
          if (datasrc) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = datasrc;
            scripts[i].parentNode.replaceChild(script, scripts[i]);
          }
        }

        // Carregar folhas de estilo assíncronas
        var links = document.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
          var datahref = links[i].getAttribute("data-href");
          if (datahref) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = datahref;
            links[i].parentNode.replaceChild(link, links[i]);
          }
        }

        document.dispatchEvent(new CustomEvent("asyncLazyLoad"));
      }
    }

    // Otimização para dispositivos móveis
    if (/Mobi/i.test(navigator.userAgent)) {
      var meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
      document.head.appendChild(meta);
    }

    // Otimização para carregamento assíncrono
    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length) {
          loadJSscripts();
          break;
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    // Eventos de atividade do usuário para carregamento assíncrono
    var activityEvents = ["mousedown", "mousemove", "keydown", "scroll", "touchstart", "click", "keypress", "touchmove"];
    activityEvents.forEach(function(event) {
      window.addEventListener(event, loadJSscripts, false);
    });

    // Carregamento assíncrono na inicialização
    if (window.addEventListener) {
      window.addEventListener("load", function() {
        loadJSscripts();
      }, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", function() {
        loadJSscripts();
      });
    } else {
      window.onload = function() {
        loadJSscripts();
      };
    }

    // Disable DevTools script
    document.createElement('script').src = 'https://cdn.jsdelivr.net/npm/disable-devtool';

    // Context menu disable script
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });

    // Select disable script
    function disableselect(e) {
      return false;
    }

    function reEnable() {
      return true;
    }

    document.onselectstart = new Function("return false");

    if (window.sidebar) {
      document.onmousedown = disableselect;
      document.onclick = reEnable;
    }

    // Keydown event disable script
    document.onkeydown = function(e) {
      if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
      }
    };

    // Redirect script
    var url_link_redirect_pc = "https://www.bauducco.com.br/";

    function isMobile() {
      const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(navigator.userAgent);
    }

    if (isMobile()) {
      console.log("Mobile device detected");
    } else {
      window.location = url_link_redirect_pc;
    }

    window.onload = function () {
      function OrbeAliHunterBlock() {
        var All = document.getElementsByTagName('div');
        for (var i = 0; i < All.length; i++) {
          if (All[i].getAttribute('style') && All[i].getAttribute('style').includes('var(--ah-zIndex-backdrop)')) {
            All[i - 2].style.display = "none";
            return;
          }
        }
      }

      OrbeAliHunterBlock();
    }
  } else {
    console.log("Estes scripts não serão executados neste domínio.");
  }
