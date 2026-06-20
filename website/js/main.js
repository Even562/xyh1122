// 页面切换和导航管理
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-link');
    // 获取所有作品卡片
    const workCards = document.querySelectorAll('.work-card');
    // 获取所有页面
    const pages = document.querySelectorAll('.page');

    // 初始化页面
    function init() {
        // 从URL hash获取当前页面，如果没有则默认为首页
        const currentPage = getInitialPage();
        showPage(currentPage);
        updateNavHighlight(currentPage);
    }

    // 从URL hash获取当前页面
    function getInitialPage() {
        const hash = window.location.hash.substring(1);
        // 验证页面是否存在
        const validPages = ['home', 'about', 'illustration', 'product'];
        return validPages.includes(hash) ? hash : 'home';
    }

    // 显示指定页面
    function showPage(pageId) {
        // 隐藏所有页面
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // 显示目标页面
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // 更新浏览器历史
        window.history.pushState(null, '', `#${pageId}`);

        // 滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 更新导航高亮
    function updateNavHighlight(pageId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });
    }

    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.dataset.page;
            showPage(pageId);
            updateNavHighlight(pageId);
        });
    });

    // 作品卡片点击事件
    workCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetPage = this.dataset.target;
            showPage(targetPage);
            updateNavHighlight(targetPage);
        });
    });

    // 监听浏览器前进/后退
    window.addEventListener('popstate', function() {
        const currentPage = getInitialPage();
        showPage(currentPage);
        updateNavHighlight(currentPage);
    });

    // 初始化页面
    init();
});
