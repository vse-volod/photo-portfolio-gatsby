const carouselFormatters = {
  getAltText: ({ data, index }: { data: { caption: string }; index: number }) =>
    data.caption || `${index + 1}. kép`,

  getNextLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Mutasd a(z) ${currentIndex + 2}. képet a(z) ${views.length} közül`,
  getPrevLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Mutasd a(z) ${currentIndex}. képet a(z) ${views.length} közül`,

  getNextTitle: () => 'Следующая',
  getPrevTitle: () => 'Предыдущая',

  getCloseLabel: () => 'Закрыть',
  getFullscreenLabel: ({ isFullscreen }: { isFullscreen: boolean }) =>
    isFullscreen
      ? 'Выйти из полноэкранного режима (f)'
      : 'Полноэкранный режим (f)',
};

export default carouselFormatters;
